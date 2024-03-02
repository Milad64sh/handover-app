const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHnadler = require('express-async-handler');

const login = asyncHnadler(async (req, res, next) => {
  const { name, password } = req.body;

  if (!name || password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const existingUser = await User.findOne({ name }).exec();

  if (!existingUser || !existingUser.active()) {
    return res.status(401).json({ message: 'Unauthorized user.' });
  }
  try {
    existingUser = await User.findOne({ name: name });
  } catch (err) {
    const error = new HttpError('Login failed, please try again.', 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      'name/password does not match, please try again.',
      403
    );
    return next(error);
  }

  const match = await bcrypt.compare(password, existingUser.password);
  if (!match) {
    return res.status(401).json({ message: 'Unauthorized User.' });
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      'supersecret_do_not_share',
      { expiresIn: '1h' }
    );
  } catch (err) {
    const error = new HttpError(
      'lggiing in failed, please try again later.',
      500
    );
    return next(error);
  }

  res.json({
    userId: existingUser.id,
    email: existingUser.email,
    token: token,
  });
});

const refresh = asyncHnadler(async (req, res) => {});

const logout = asyncHnadler(async (req, res) => {});
