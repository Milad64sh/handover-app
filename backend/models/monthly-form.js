const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;
const monthlyFormSchema = new Schema(
  {
    service: { type: String, required: true },
    month: { type: String, required: true },
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
    question_11: { type: String, required: true },
    question_12: { type: String, required: true },
    question_13: { type: String, required: true },
    question_14: { type: String, required: true },
    question_15: { type: String, required: true },
    question_16: { type: String, required: true },
    question_17: { type: String, required: true },
    question_18: { type: String, required: true },
    question_19: { type: String, required: true },
    question_20: { type: String, required: true },
    question_21: { type: String, required: true },
    question_22: { type: String, required: true },
    question_23: { type: String, required: true },
    question_24: { type: String, required: true },
    question_25: { type: String, required: true },
    question_26: { type: String, required: true },
    question_27: { type: String, required: true },
    question_28: { type: String, required: true },
    question_29: { type: String, required: true },
    question_30: { type: String, required: true },
    question_31: { type: String, required: true },
    question_32: { type: String, required: true },
    question_33: { type: String, required: true },
    question_34: { type: String, required: true },
    question_35: { type: String, required: true },
    question_36: { type: String, required: true },
    question_37: { type: String, required: true },
    question_38: { type: String, required: true },
    question_39: { type: String, required: true },
    question_40: { type: String, required: true },
    question_41: { type: String, required: true },
    creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
  },
  {
    timestamps: true,
  }
);
monthlyFormSchema.plugin(AutoIncrement, {
  inc_field: 'monthlyTicketNameCounter',
});

module.exports = mongoose.model('Monthly-handover', monthlyFormSchema);
