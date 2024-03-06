const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const HttpError = require('../models/http-error');
const User = require('../models/user');
const Form = require('../models/form');

// ROUTES ONLY HAVE ACCESS BY ADMIN AND MANAGER

// ALL USERS
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password').lean();
  if (!users?.length) {
    return res.status(400).json({ message: 'No users found.' });
  }
  res.json(users);
});

// NEW USER
const createNewUser = asyncHandler(async (req, res) => {
  const { name, password, roles, email } = req.body;
  if (!name || !email || !password || !Array.isArray(roles) || !roles.length) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // check for duplicate user
  const duplicate = await User.findOne({ name }).lean().exec();
  if (duplicate) {
    return res.status(409).json({ message: 'Duplicate username' });
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const userObject = { name, email, password: hashedPassword, roles };
  const user = await User.create(userObject);
  if (user) {
    res.status(201).json({ message: `New user ${name} created` });
  } else {
    res.status(400).json({ message: 'Invalid user data received.' });
  }
});

// UPDATE USER
const updateUser = asyncHandler(async (req, res) => {
  const { id, name, roles, active, password, forms } = req.body;

  const user = await User.findById(id).exec();

  if (!id) {
    return res.status(400).json({ message: 'User ID is required.' });
  }
  if (name !== undefined) {
    const duplicate = await User.findOne({ name }).lean().exec();
    if (duplicate && duplicate?._id.toString() !== id) {
      return res.status(409).json({ message: 'Duplicate username' });
    }
    user.name = name;
  }

  if (roles !== undefined && Array.isArray(roles)) {
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
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({ message: 'User ID Required.' });
  }

  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: 'User not found.' });
  }
  const reply = `Username ${user.name} with ID ${user._id} deleted.`;
  await user.deleteOne();
  res.json(reply);
});

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
    // image: req.file.path,
    password: hashedPassword,
    forms: [],
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

  res
    .status(201)
    .json({ userId: createdUser.id, email: createdUser.email, token: token });
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
exports.createNewUser = createNewUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
// exports.getUsers = getUsers;
exports.signUp = signUp;
exports.login = login;
