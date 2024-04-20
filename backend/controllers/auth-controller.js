const User = require('../models/user');
const UserToken = require('../models/userToken');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHnadler = require('express-async-handler');
const HttpError = require('../models/http-error');
const nodemailer = require('nodemailer');

const login = asyncHnadler(async (req, res, next) => {
  const { password, email, name } = req.body;

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

  const match = await bcrypt.compare(password, existingUser.password);
  if (!match) {
    return res.status(401).json({ message: 'Unauthorized User.' });
  }

  const accessToken = jwt.sign(
    {
      userId: existingUser.id,
      roles: existingUser.roles,
      UserInfo: {
        username: existingUser.name,
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
  res.json({
    token: accessToken,
    userId: existingUser.id,
    roles: existingUser.roles,
    email: existingUser.email,
    name: existingUser.name,
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

const sendEmail = async (req, res, next) => {
  let email = req.body.email;
  email = email.replace(/\.(?=.*@)/g, '');
  console.log('Email from request:', email);
  const user = await User.findOne({ email: email });
  console.log('User found:', user);
  if (!user) {
    const error = new HttpError('Could not find any user.', 404);
    return next(error);
  }
  const payload = {
    email: user.email,
  };
  const expiryTime = 300;
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: expiryTime,
  });
  const newToken = new UserToken({
    userId: user._id,
    token: token,
  });
  const mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'm.shalikarian@gmail.com',
      pass: 'mjmq ofjj hlnd mxgk',
    },
  });
  const resetLink = `${process.env.LIVE_URL}/reset/${token}`;
  let mailDetails = {
    from: 'm.shalikarian@gmail.com',
    to: email,
    subject: 'Reset Password',
    html: `
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Password Reset Request</title>
</head>
<body>
  <p>Dear ${user.name},</p>
 <p>We have received a request to reset your password for your account with Jigsaw Creative Care. To complete the password reset process, please click on the button below:</p>
 <a href="${resetLink}"><button style="background-color: #936ba3; color: white; padding: 10px; border: none; cursor: pointer; border-radius: 4px;">Reset Password</button></a>
 <p>Please note that this link is only valid for 5 minutes. If you did not request a password, please disregard this message.</p>
 <p>Thank you.</p>
 <p>Jigsaw Creative Care</p>
</body>
</html>
    `,
  };
  mailTransporter.sendMail(mailDetails, async (err, data) => {
    if (err) {
      console.log('Error:', err);
      const error = new HttpError(
        'Something went wrong while sending the email.',
        500
      );
      return next(error);
    } else {
      await newToken.save();
      res.status(200).json({ message: 'Email sent successfully.' });
    }
  });
};

exports.login = login;
exports.refresh = refresh;
exports.logout = logout;
exports.sendEmail = sendEmail;
