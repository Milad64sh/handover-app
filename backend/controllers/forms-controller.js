const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
let DUMMY_FORMS = [
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
    throw new HttpError('Could not find a form for provided id.');
  }

  res.json({ form });
};

const getFormsByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const forms = DUMMY_FORMS.filter((f) => {
    return f.staff === userId;
  });
  if (!forms || forms.length === 0) {
    return next(new HttpError('Could not find a forms for provided id.', 404));
  }

  return res.json({ forms });
};

const createForm = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError(
      'Invalid inputs passed, please check your inputs.',
      422
    );
  }
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

// PATCH

const updateFormById = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    throw new HttpError(
      'Invalid inputs passed, please check your inputs.',
      422
    );
  }
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
  const formId = req.params.formid;
  const updatedForm = { ...DUMMY_FORMS.find((f) => f.id === formId) };
  const formIndex = DUMMY_FORMS.findIndex((f) => f.id === formId);
  updatedForm.service = service;
  updatedForm.week = week;
  updatedForm.staff = staff;
  updatedForm.question_1 = question_1;
  updatedForm.question_2 = question_2;
  updatedForm.question_3 = question_3;
  updatedForm.question_4 = question_4;
  updatedForm.question_5 = question_5;
  updatedForm.question_6 = question_6;
  updatedForm.question_7 = question_7;
  updatedForm.question_8 = question_8;
  updatedForm.question_9 = question_9;
  updatedForm.question_10 = question_10;

  DUMMY_FORMS[formIndex] = updatedForm;
  res.status(200).json({ form: updatedForm });
};

// DELETE

const deleteForm = (req, res, next) => {
  const formId = req.params.formid;
  if (!DUMMY_FORMS.find((f) => f.id === formId)) {
    throw new HttpError('Couold not find a form for that id.', 404);
  }
  DUMMY_FORMS = DUMMY_FORMS.filter((f) => f.id !== formId);
  res.status(200).json({ message: 'Deleted Place' });
};

exports.getFormById = getFormById;
exports.getFormsByUserId = getFormsByUserId;
exports.createForm = createForm;
exports.updateFormById = updateFormById;
exports.deleteForm = deleteForm;
