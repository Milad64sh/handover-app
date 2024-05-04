const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const HttpError = require('../models/http-error');
const Form = require('../models/form');
const MonthlyForm = require('../models/monthly-form');
const User = require('../models/user');

const getAllForms = (req, res, next) => {};

exports.getAllForms = getAllForms;
