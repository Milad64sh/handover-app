const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const HttpError = require('../models/http-error');
const DailyForm = require('../models/daily-form');
const User = require('../models/user');

// GET ALL DAILY FORMS
const getAllDailyForms = async (req, res, next) => {
  let allDailyForms;
  try {
    let query = {};
    if (req.query.staff) {
      query.staff = req.query.staff;
    }
    if (req.query.service) {
      query.service = req.query.service;
    }
    // PAGINATION LOGIC
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;
    allDailyForms = await DailyForm.find(query).skip(skip).limit(pageSize);
    const total = await DailyForm.countDocuments();
    const pages = Math.ceil(total / pageSize);
    res.json({
      allDailyForms: allDailyForms.map((form) =>
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
    const error = new HttpError(
      'Something went wrong, could not find the form.',
      500
    );
    return next(error);
  }
  if (!allDailyForms || allDailyForms.length === 0) {
    const error = new HttpError('Could not find any form.', 404);
    return next(error);
  }
};

// GET FORM BY USER ID

const getDailyFormById = async (req, res, next) => {
  const formId = req.params.formid;
  let dailyForm;
  try {
    dailyForm = await DailyForm.findById(formId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a  daily-handover form.',
      500
    );
    return next(error);
  }
  if (!dailyForm) {
    const error = new HttpError(
      'Could not find a daily-handover form for provided ID!'
    );
    return next(error);
  }
  res.json({ form: dailyForm.toObject({ getters: true }) });
};

// GET FORMS BY USER ID

const getDailyFormsByUserId = async (req, res, next) => {
  const userId = req.params.uid;
  let userWithDailyForms;
  try {
    userWithDailyForms = await User.findById(userId).populate('dailyForms');
  } catch (err) {
    const error = new HttpError(
      'Fetching daily forms failed, please try again.',
      500
    );
    return next(error);
  }
  if (!userWithDailyForms || userWithDailyForms.dailyForms.length === 0) {
    return next(
      new HttpError('Could not find Daily-handover forms for provided ID.', 404)
    );
  }
  res.json({
    dailyForms: userWithDailyForms.dailyForms.map((dailyForm) =>
      dailyForm.toObject({ getters: true })
    ),
  });
};

const postDailyForm = async (req, res, next) => {
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
    day,
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
    question_41,
    question_42,
    question_43,
    question_44,
    question_45,
    question_46,
    question_47,
    question_48,
    creator,
  } = req.body;
  const createdDailyForm = new DailyForm({
    service,
    day,
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
    question_41,
    question_42,
    question_43,
    question_44,
    question_45,
    question_46,
    question_47,
    question_48,
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
    await createdDailyForm.save({ session: sess });
    user.dailyForms.push(createdDailyForm);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError('Creating form failed, please try again.', 500);
    return next(error);
  }
  res.status(201).json({ dailyForm: createdDailyForm });
};
const updateDailyFormById = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(
      new HttpError('Invalid inputs passed, please check your inputs.', 422)
    );
  }
  const {
    service,
    day,
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
    question_41,
    question_42,
    question_43,
    question_44,
    question_45,
    question_46,
    question_47,
    question_48,
  } = req.body;
  const formId = req.params.formid;
  let dailyForm;
  try {
    dailyForm = await DailyForm.findById(formId);
    if (!dailyForm) {
      const error = new HttpError('Daily From not found', 404);
      return next(error);
    }
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Something went wrong, could not update the daily form',
      500
    );
    return next(error);
  }
  if (
    dailyForm.creator.toString() !== req.userData.userId &&
    req.userData.status !== 'Manager'
  ) {
    const error = new HttpError(
      'You are not allowed to edit this document.',
      401
    );
    return next(error);
  }
  dailyForm.service = service;
  dailyForm.day = day;
  dailyForm.staff = staff;
  dailyForm.question_1 = question_1;
  dailyForm.question_2 = question_2;
  dailyForm.question_3 = question_3;
  dailyForm.question_4 = question_4;
  dailyForm.question_5 = question_5;
  dailyForm.question_6 = question_6;
  dailyForm.question_7 = question_7;
  dailyForm.question_8 = question_8;
  dailyForm.question_9 = question_9;
  dailyForm.question_10 = question_10;
  dailyForm.question_11 = question_11;
  dailyForm.question_12 = question_12;
  dailyForm.question_13 = question_13;
  dailyForm.question_14 = question_14;
  dailyForm.question_15 = question_15;
  dailyForm.question_16 = question_16;
  dailyForm.question_17 = question_17;
  dailyForm.question_18 = question_18;
  dailyForm.question_19 = question_19;
  dailyForm.question_20 = question_20;
  dailyForm.question_21 = question_21;
  dailyForm.question_22 = question_22;
  dailyForm.question_23 = question_23;
  dailyForm.question_24 = question_24;
  dailyForm.question_25 = question_25;
  dailyForm.question_26 = question_26;
  dailyForm.question_27 = question_27;
  dailyForm.question_28 = question_28;
  dailyForm.question_29 = question_29;
  dailyForm.question_30 = question_30;
  dailyForm.question_31 = question_31;
  dailyForm.question_32 = question_32;
  dailyForm.question_33 = question_33;
  dailyForm.question_34 = question_34;
  dailyForm.question_35 = question_35;
  dailyForm.question_36 = question_36;
  dailyForm.question_37 = question_37;
  dailyForm.question_38 = question_38;
  dailyForm.question_39 = question_39;
  dailyForm.question_40 = question_40;
  dailyForm.question_41 = question_41;
  dailyForm.question_42 = question_42;
  dailyForm.question_43 = question_43;
  dailyForm.question_44 = question_44;
  dailyForm.question_45 = question_45;
  dailyForm.question_46 = question_46;
  dailyForm.question_47 = question_47;
  dailyForm.question_48 = question_48;
  try {
    await dailyForm.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update the daily form ',
      500
    );
    return next(error);
  }

  res.status(200).json({ dailyForm: dailyForm.toObject({ getters: true }) });
};

exports.getAllDailyForms = getAllDailyForms;
exports.getDailyFormById = getDailyFormById;
exports.getDailyFormsByUserId = getDailyFormsByUserId;
exports.postDailyForm = postDailyForm;
exports.updateDailyFormById = updateDailyFormById;
