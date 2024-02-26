const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const User = require('../models/user');

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, '-password');
  } catch (err) {
    const error = new HttpError('No Users found, please try again.', 500);
    return next(error);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

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

  const createdUser = new User({
    name,
    email,
    image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpikwizard.com%2Fphoto%2Fportrait-of-smiling-male-executive%2F39573f81d4d58261e5e1ed8f1ff890f6%2F&psig=AOvVaw2Fnf3HkJoJar6MzE0HxC74&ust=1708796196245000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKD84baAwoQDFQAAAAAdAAAAABAJ',
    password,
    forms: [],
  });
  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError('Creating user failed, please try again.', 500);
    return next(error);
  }
  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
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

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      'Email/passowrd does not match, please try again.',
      401
    );
    return next(error);
  }
  res.json({
    message: 'Successfully logged in',
    user: existingUser.toObject({ getters: true }),
  });
};

exports.getUsers = getUsers;
exports.signUp = signUp;
exports.login = login;
