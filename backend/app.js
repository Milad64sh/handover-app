require('dotenv').config();
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const HttpError = require('./models/http-error');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const { logger, logEvents } = require('./middleware/logger');

const formsRoutes = require('./routes/forms-routes');
const usersRoutes = require('./routes/users-routes');
const authRoutes = require('./routes/auth-routes');

// app.use(logger);

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/weekly-handovers', formsRoutes);
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

mongoose.connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
mongoose.connection.on('error', (err) => {
  console.log(err);
});

// mongoose
//   .connect(

//   )
//   .then(() => {
//     app.listen(PORT);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
