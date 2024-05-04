const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  forms: [{ type: mongoose.Types.ObjectId, ref: 'Weekly-handover' }],
  monthlyForms: [{ type: mongoose.Types.ObjectId, ref: 'Monthly-handover' }],
  roles: { type: String, default: 'Employee' },
  active: { type: Boolean, default: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
