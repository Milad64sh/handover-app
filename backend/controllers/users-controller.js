const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const HttpError = require('../models/http-error');
const User = require('../models/user');
const Form = require('../models/form');

// ROUTES ONLY HAVE ACCESS BY ADMIN AND MANAGER

// ALL USERS
const getAllUsers = asyncHandler(async (req, res) => {
  let users;
  try {
    // pagination logic
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;
    users = await User.find().skip(skip).limit(pageSize).select('-password');
    const total = await Form.countDocuments();
    const pages = Math.ceil(total / pageSize);
    res.json({
      users: users.map((user) => user.toObject({ getters: true })),
      pagination: {
        total,
        page,
        pages,
      },
    });
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find users.',
      500
    );
    return next(error);
  }
  if (!users || users.length === 0) {
    const error = new HttpError('Could not find any user.', 404);
    return next(error);
  }
});

// GET USERS NAMES
const getUsersNames = async (req, res, next) => {
  try {
    const users = await User.find({}, 'name');
    const names = users.map((user) => user.name);
    res.json(names);
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find the user.',
      500
    );
    return next(error);
  }
};

// GET USER BY ID
const getUserById = async (req, res, next) => {
  const userId = req.params.userid;
  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find the user.',
      500
    );
    return next(error);
  }
  if (!user) {
    const error = new HttpError('Could not find a form for provided id.');
    return next(error);
  }
  res.json({ user: user.toObject({ getters: true }) });
};

// NEW USER
const createNewUser = asyncHandler(async (req, res) => {
  const { name, password, roles, email, active } = req.body;
  if (!name || !email || !password || !roles || active === undefined) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // check for duplicate user
  const duplicate = await User.findOne({ name }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: 'Duplicate username' });
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const userObject = {
    name,
    email,
    password: hashedPassword,
    roles,
    active: active === 'Active',
  };
  const user = await User.create(userObject);
  if (user) {
    res.status(201).json({ message: `New user ${name} created` });
  } else {
    res.status(400).json({ message: 'Invalid user data received.' });
  }
});

// const createUser = async (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     console.log(errors);
//     throw new HttpError(
//       'Invalid inputs passed, please check your inputs.',
//       422
//     );
//   }
//   const { name, email, password, forms, active, roles } = req.body;
//   const createdUser = new User({
//     name,
//     email,
//     password,
//     forms,
//     active,
//     roles,
//   });
//   let user;
//   try {
//     user = await User.findById(email);
//   } catch (err) {
//     const error = new HttpError(
//       'User failed to create, please try again.',
//       500
//     );
//     return next(error);
//   }
//   try {
//     const sess = await mongoose.startSession();
//     sess.startTransaction();
//     await createdUser.save({ session: sess });
//     user.users.push(createdUser);
//     await user.save({ session: sess });
//     await sess.commitTransaction();
//   } catch (err) {
//     console.log(err);
//     const error = new HttpError('Creating form failed, please try again.', 500);
//     return next(error);
//   }
//   res.status(201).json({ user: createdUser });
// };

// UPDATE USER
const updateUserById = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError('Invalid inputs passed, please check your inputs.', 422)
    );
  }
  const { name, email, roles, active } = req.body;

  const userId = req.params.userid;

  let user;
  try {
    user = await User.findById(userId).exec();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update form ',
      500
    );
    return next(error);
  }
  // if (user.creator.toString() !== req.userData.userId) {
  //   const error = new HttpError(
  //     'You are not allowed to edit this document.',
  //     401
  //   );
  //   return next(error);
  // }
  user.name = name;
  user.email = email;
  user.roles = roles;
  user.active = active;
  try {
    await user.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update form ',
      500
    );
    return next(error);
  }
  res.status(200).json({ user: user.toObject({ getters: true }) });
};
const updateUser = asyncHandler(async (req, res) => {
  const { name, roles, active, password, forms } = req.body;

  const userId = req.params.userid;
  const user = await User.findById(userId).exec();

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required.' });
  }
  if (name !== undefined) {
    const duplicate = await User.findOne({ name }).lean().exec();
    if (duplicate && duplicate?._id.toString() !== id) {
      return res.status(409).json({ message: 'Duplicate username' });
    }
    user.name = name;
  }

  if (roles !== undefined) {
    user.roles = roles;
  }

  if (active !== undefined && typeof active === 'boolean') {
    user.active = active;
  }

  if (forms !== undefined && Array.isArray(forms)) {
    user.forms = forms;
  }

  if (password !== undefined) {
    user.password = await bcrypt.hash(password, 12);
  }

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }
  const duplicate = await User.findOne({ name }).lean().exec();
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: 'Duplicate username' });
  }

  user.name = name;
  user.roles = roles;
  user.active = active;
  user.forms = forms;
  if (password) {
    user.password = await bcrypt.hash(password, 12);
  }
  const updatedUser = await user.save();
  res.json({ meassage: `${updatedUser.name} updated.` });
});

// DELETE USER
const deleteUser = async (req, res) => {
  const userid = req.params.userid;

  if (!userid) {
    return res.status(400).json({ message: 'User ID Required.' });
  }

  const user = await User.findById(userid).exec();

  if (!user) {
    return res.status(400).json({ message: 'User not found.' });
  }
  const reply = `Username ${user.name} with ID ${user._id} deleted.`;
  await user.deleteOne();
  res.json(reply);
};

// const getUsers = async (req, res, next) => {
//   let users;
//   try {
//     users = await User.find({}, '-password');
//   } catch (err) {
//     const error = new HttpError('No Users found, please try again.', 500);
//     return next(error);
//   }
//   res.json({ users: users.map((user) => user.toObject({ getters: true })) });
// };

// SIGNUP

const signUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError('Invalid inputs passed, please check your inputs.', 422)
    );
  }
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError('Sign up failed, please try again.', 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      'This user already has an account, please try login.',
      422
    );
    return next(error);
  }
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError('Could not create user, please try again', 500);
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password: hashedPassword,
    forms: [],
    roles: 'Employee',
    active: true,
  });
  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError('Creating user failed, please try again.', 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }

  res.status(201).json({
    userId: createdUser.id,
    email: createdUser.email,
    token: token,
    isManager: false,
    isAdmin: false,
    status: 'Employee',
    name: createdUser.name,
  });
};

// LOGIN

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError('Login failed, please try again.', 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      'Email/passowrd does not match, please try again.',
      403
    );
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      'Could not log in, please check your credentials and try again.',
      500
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );
  } catch (err) {
    const error = new HttpError(
      'logging in failed, please try again later.',
      500
    );
    return next(error);
  }

  res.json({
    userId: existingUser.id,
    email: existingUser.email,
    token: token,
  });
};

exports.getAllUsers = getAllUsers;
exports.getUsersNames = getUsersNames;
exports.getUserById = getUserById;
exports.createNewUser = createNewUser;
// exports.createUser = createUser;
exports.updateUserById = updateUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.signUp = signUp;
exports.login = login;
