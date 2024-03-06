const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHnadler = require('express-async-handler');
const HttpError = require('../models/http-error');

const login = asyncHnadler(async (req, res, next) => {
  const { name, password, email } = req.body;

  if (!password || !email) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  const existingUser = await User.findOne({ email: email });

  if (!existingUser || !existingUser.active) {
    console.log(`existing user: ${existingUser}`);
    return res.status(401).json({
      message: 'Unauthorized user.',
    });
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

  const accessToken = jwt.sign(
    {
      UserInfo: {
        username: existingUser.username,
        roles: existingUser.roles,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '1h' }
  );

  const refreshToken = jwt.sign(
    { username: existingUser.username },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '1d' }
  );
  res.cookie('jwt', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  // Send back accessToken containing username and roles
  res.json({
    token: accessToken,
    userId: existingUser.id,
    email: existingUser.email,
  });
});

const refresh = asyncHnadler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt)
    return res.status(401).json({ message: 'Unauthorized user!' });

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    asyncHnadler(async (err, decoded) => {
      if (err) return res.status(403).json({ message: 'Forbidden' });
      const foundUser = await User.findOne({ username: decoded.name }).exec();
      console.log(foundUser);
      if (!foundUser)
        return res.status(401).json({ message: 'Unauthorized user.' });
      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: foundUser.name,
            roles: foundUser.roles,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h' }
      );
      res.json({ accessToken });
    })
  );
});

const logout = asyncHnadler(async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true });
  res.json({ message: 'Cookie cleared' });
});

exports.login = login;
exports.refresh = refresh;
exports.logout = logout;
