const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const HttpError = require('../models/http-error');
const MonthlyForm = require('../models/monthly-form');
const User = require('../models/user');

const getAllMonthlyForms = async (req, res, next) => {
  let allMonthlyForms;
  try {
    let query = {};
    if (req.query.staff) {
      query.staff = req.query.staff;
    }
    if (req.query.service) {
      query.service = req.query.service;
    }

    // pagination logic
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;

    allMonthlyForms = await MonthlyForm.find(query).skip(skip).limit(pageSize);

    const total = await MonthlyForm.countDocuments();
    const pages = Math.ceil(total / pageSize);
    res.json({
      allMonthlyForms: allMonthlyForms.map((form) =>
        form.toObject({ getters: true })
      ),
      pagination: {
        total,
        page,
        pages,
      },
    });
  } catch (err) {
    console.log(err);
    console.log(pagination);
    const error = new HttpError(
      'Something went wrong, could not find the user.',
      500
    );
    return next(error);
  }
  if (!allMonthlyForms || allMonthlyForms.length === 0) {
    const error = new HttpError('Could not find any form.', 404);
    return next(error);
  }
};

// GET FORM BY USER ID

const getMonthlyFormById = async (req, res, next) => {
  const formId = req.params.formid;
  let monthlyForm;
  try {
    monthlyForm = await MonthlyForm.findById(formId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a  monthly-handover form.',
      500
    );
    return next(error);
  }
  if (!monthlyForm) {
    const error = new HttpError(
      'Could not find a monthly-handover form for provided ID!'
    );
    return next(error);
  }
  res.json({ form: form.toObject({ getters: true }) });
};

// GET FORMS BY USER ID

const getMonthlyFormsByUserId = async (req, res, next) => {
  const userId = req.params.uid;
  let userWithMonthlyForms;
  try {
    userWithMonthlyForms = await User.findById(userId).populate('monthlyForms');
  } catch (err) {
    const error = new HttpError(
      'Fetching forms failed, please try again.',
      500
    );
    return next(error);
  }
  if (!userWithMonthlyForms || userWithMonthlyForms.monthlyForms.length === 0) {
    return next(
      new HttpError(
        'Could not find Monthly-handover forms for provided ID.',
        404
      )
    );
  }
  res.json({
    monthlyForms: userWithMonthlyForms.monthlyForms.map((monthlyForm) =>
      monthlyForm.toObject({ getters: true })
    ),
  });
};

const postMonthlyForm = async (req, res, next) => {
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
    month,
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
    question_11,
    question_12,
    question_13,
    question_14,
    question_15,
    question_16,
    question_17,
    question_18,
    question_19,
    question_20,
    question_21,
    question_22,
    question_23,
    question_24,
    question_25,
    question_26,
    question_27,
    question_28,
    question_29,
    question_30,
    question_31,
    question_32,
    question_33,
    question_34,
    question_35,
    question_36,
    question_37,
    question_38,
    question_39,
    question_40,
    creator,
  } = req.body;
  const createdMonthlyForm = new MonthlyForm({
    service,
    month,
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
    question_11,
    question_12,
    question_13,
    question_14,
    question_15,
    question_16,
    question_17,
    question_18,
    question_19,
    question_20,
    question_21,
    question_22,
    question_23,
    question_24,
    question_25,
    question_26,
    question_27,
    question_28,
    question_29,
    question_30,
    question_31,
    question_32,
    question_33,
    question_34,
    question_35,
    question_36,
    question_37,
    question_38,
    question_39,
    question_40,
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
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdMonthlyForm.save({ session: sess });
    user.monthlyForms.push(createdMonthlyForm);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError('Creating form failed, please try again.', 500);
    return next(error);
  }
  res.status(201).json({ monthlyForm: createdMonthlyForm });
};

exports.getAllMonthlyForms = getAllMonthlyForms;
exports.getMonthlyFormById = getMonthlyFormById;
exports.getMonthlyFormsByUserId = getMonthlyFormsByUserId;
exports.postMonthlyForm = postMonthlyForm;
