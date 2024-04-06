const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.PASSWORD}@cluster0.mme6o2k.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
