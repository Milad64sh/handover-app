const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const HttpError = require('../models/http-error');
const WeeklyForm = require('../models/weekly-form');
const MonthlyForm = require('../models/monthly-form');
const User = require('../models/user');

const getAllForms = async (req, res, next) => {
  let allForms;
  try {
    let query = {};
    if (req.query.staff) {
      query.staff = req.query.staff;
    }
    if (req.query.service) {
      query.service = req.query.service;
    }
    if (req.query.formGroup) {
      query.formGroup = req.query.formGroup;
    }
    // Pagination logic
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;

    // Fetch forms from both collections
    const weeklyForms = await WeeklyForm.find(query).skip(skip).limit(pageSize);
    const monthlyForms = await MonthlyForm.find(query)
      .skip(skip)
      .limit(pageSize);
    allForms = [...weeklyForms, ...monthlyForms];

    const weeklyTotal = await WeeklyForm.countDocuments();
    const monthlyTotal = await MonthlyForm.countDocuments();
    const pages = Math.ceil((weeklyTotal + monthlyTotal) / pageSize);
    res.json({
      allForms: allForms.map((form) => form.toObject({ getters: true })),
      pagination: {
        weeklyTotal,
        monthlyTotal,
        page,
        pages,
      },
    });
  } catch (err) {
    const error = new HttpError(
      'Something went wrong could not find the user.',
      500
    );
    return next(error);
  }
  if (!allForms || allForms.length === 0) {
    const error = new HttpError('Could not find any form.', 404);
    return next(error);
  }
};

exports.getAllForms = getAllForms;
