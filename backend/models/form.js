const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema({
  service: { type: String, required: true },
  week: { type: String, required: true },
  staff: { type: String, required: true },
  question_1: { type: String, required: true },
  question_2: { type: String, required: true },
  question_3: { type: String, required: true },
  question_4: { type: String, required: true },
  question_5: { type: String, required: true },
  question_6: { type: String, required: true },
  question_7: { type: String, required: true },
  question_8: { type: String, required: true },
  question_9: { type: String, required: true },
  question_10: { type: String, required: true },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
});

module.exports = mongoose.model('Form', formSchema);
