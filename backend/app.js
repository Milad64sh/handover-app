const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('./models/http-error');
const mongoose = require('mongoose');

const formsRoutes = require('./routes/forms-routes');
const usersRoutes = require('./routes/users-routes');

const app = express();

app.use(bodyParser.json());

app.use('/api/forms', formsRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error ocurred.' });
});

mongoose
  .connect(
    'mongodb+srv://Milad:KoZFrXs70caofsIx@cluster0.mme6o2k.mongodb.net/forms?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
