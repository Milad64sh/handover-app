const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const Form = require('../models/form');
const User = require('../models/user');

const getAllForms = async (req, res, next) => {
  let allForms;
  try {
    allForms = await Form.find().lean();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not find the user.',
      500
    );
    return next(error);
  }
  if (!allForms || allForms.length === 0) {
    const error = new HttpError('Could not find any form.', 404);
    return next(error);
  }
  res.json({ allForms: allForms });
};

const getFormById = async (req, res, next) => {
  const formId = req.params.formid;
  let form;

  try {
    form = await Form.findById(formId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a form.',
      500
    );
    return next(error);
  }

  if (!form) {
    const error = new HttpError('Could not find a form for provided id.');
    return next(error);
  }

  res.json({ form: form.toObject({ getters: true }) });
};

// GET FORM FOR USER

const getFormsByUserId = async (req, res, next) => {
  const userId = req.params.uid;
  // let forms;
  let userWithForms;
  try {
    userWithForms = await User.findById(userId).populate('forms');
  } catch (err) {
    const error = new HttpError(
      'Fetching forms failed, please try again.',
      500
    );
    return next(error);
  }
  if (!userWithForms || userWithForms.forms.length === 0) {
    return next(new HttpError('Could not find  forms for provided id.', 404));
  }

  res.json({
    forms: userWithForms.forms.map((form) => form.toObject({ getters: true })),
  });
};

// CREATE FORM

const createForm = async (req, res, next) => {
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
    creator,
  } = req.body;

  const createdForm = new Form({
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
    creator,
  });

  let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError(
      'Form failed to create, please try again.',
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find user for provided id.', 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdForm.save({ session: sess });
    user.forms.push(createdForm);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError('Creating form failed, please try again.', 500);
    return next(error);
  }

  res.status(201).json({ form: createdForm });
};

// UPDATE FORM

const updateFormById = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError('Invalid inputs passed, please check your inputs.', 422)
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

  let form;
  try {
    form = await Form.findById(formId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update form ',
      500
    );
    return next(error);
  }

  if (form.creator.toString() !== req.userData.userId) {
    const error = new HttpError(
      'You are not allowed to edit this document.',
      401
    );
    return next(error);
  }

  form.service = service;
  form.week = week;
  form.staff = staff;
  form.question_1 = question_1;
  form.question_2 = question_2;
  form.question_3 = question_3;
  form.question_4 = question_4;
  form.question_5 = question_5;
  form.question_6 = question_6;
  form.question_7 = question_7;
  form.question_8 = question_8;
  form.question_9 = question_9;
  form.question_10 = question_10;

  try {
    await form.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update form ',
      500
    );
    return next(error);
  }

  res.status(200).json({ form: form.toObject({ getters: true }) });
};

// DELETE

const deleteForm = async (req, res, next) => {
  const formId = req.params.formid;
  let form;
  try {
    form = await Form.findById(formId).populate('creator');
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete the form.',
      500
    );
    return next(error);
  }
  console.log(req.userData);

  if (form.creator.id !== req.userData.userId) {
    const error = new HttpError(
      `You are not allowed to delete this document. creator id is: ${form.creator.id} and user id is: ${req}`,
      401
    );

    return next(error);
  }

  if (!form) {
    const error = new HttpError('Form for this user not found.', 404);
    return next(error);
  }
  const sess = await mongoose.startSession();
  sess.startTransaction();
  try {
    form.creator.forms.pull(form);
    form.creator.markModified('forms');
    await form.creator.save({ session: sess });
    await Form.deleteOne({ _id: formId }, { session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not delete the form.',
      500
    );

    return next(error);
  }
  res.status(200).json({ message: 'Deleted Place' });
};

exports.getAllForms = getAllForms;
exports.getFormById = getFormById;
exports.getFormsByUserId = getFormsByUserId;
exports.createForm = createForm;
exports.updateFormById = updateFormById;
exports.deleteForm = deleteForm;
