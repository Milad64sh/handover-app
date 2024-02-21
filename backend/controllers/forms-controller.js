const uuid = require('uuid/v4');
const HttpError = require('../models/http-error');
const DUMMY_FORMS = [
  {
    id: 'f1',
    service: 'JS',
    week: '19-02-24',
    staff: 'MS',
    question_1: 'Q1',
    question_2: 'Q2',
    question_3: 'Q3',
    question_4: 'Q4',
    question_5: 'Q5',
    question_6: 'Q6',
    question_7: 'Q7',
    question_8: 'Q8',
    question_9: 'Q9',
    question_10: 'Q10',
  },
];

const getFormById = (req, res, next) => {
  const formId = req.params.formid;
  const form = DUMMY_FORMS.find((f) => {
    return f.id === formId;
  });

  if (!form) {
    throw new HttpError('Could not find a place for provided id.');
  }

  res.json({ form });
};

const getFormByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const form = DUMMY_FORMS.find((f) => {
    return f.staff === userId;
  });
  if (!form) {
    return next(new HttpError('Could not find a place for provided id.', 404));
  }

  return res.json({ form });
};

const createForm = (req, res, next) => {
  const {
    service,
    week,
    staff,
    question_1,
    question_2,
    question_3,
    question_4,
    question_5,
    question_6,
    question_7,
    question_8,
    question_9,
    question_10,
  } = req.body;
  const createdForm = {
    id: uuid(),
    service,
    week,
    staff,
    question_1,
    question_2,
    question_3,
    question_4,
    question_5,
    question_6,
    question_7,
    question_8,
    question_9,
    question_10,
  };
  DUMMY_FORMS.push(createdForm);
  res.status(201).json({ form: createdForm });
};

exports.getFormById = getFormById;
exports.getFormByUserId = getFormByUserId;
exports.createForm = createForm;
