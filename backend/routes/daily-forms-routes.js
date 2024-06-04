const express = require('express');
const { check } = require('express-validator');
const dailyFormsController = require('../controllers/daily-forms-controller');
const router = express.Router();

router.get('/', dailyFormsController.getAllDailyForms);
router.get('/:formid', dailyFormsController.getDailyFormById);
router.get('/user/:uid', dailyFormsController.getDailyFormsByUserId);
router.post(
  '/',
  [
    check('service').not().isEmpty(),
    check('day').not().isEmpty(),
    check('staff').not().isEmpty(),
    check('question_1').isLength({ min: 10 }),
    check('question_2').isLength({ min: 10 }),
    check('question_3').isLength({ min: 10 }),
    check('question_4').isLength({ min: 10 }),
    check('question_5').isLength({ min: 10 }),
    check('question_6').isLength({ min: 10 }),
    check('question_7').isLength({ min: 10 }),
    check('question_8').isLength({ min: 10 }),
    check('question_9').isLength({ min: 10 }),
    check('question_10').isLength({ min: 10 }),
    check('question_11').isLength({ min: 10 }),
    check('question_12').isLength({ min: 10 }),
    check('question_13').isLength({ min: 10 }),
    check('question_14').isLength({ min: 10 }),
    check('question_15').isLength({ min: 10 }),
    check('question_16').isLength({ min: 10 }),
    check('question_17').isLength({ min: 10 }),
    check('question_18').isLength({ min: 10 }),
    check('question_19').isLength({ min: 10 }),
    check('question_20').isLength({ min: 10 }),
    check('question_21').isLength({ min: 10 }),
    check('question_22').isLength({ min: 10 }),
    check('question_23').isLength({ min: 10 }),
    check('question_24').isLength({ min: 10 }),
    check('question_25').isLength({ min: 10 }),
    check('question_26').isLength({ min: 10 }),
    check('question_27').isLength({ min: 10 }),
    check('question_28').isLength({ min: 10 }),
    check('question_29').isLength({ min: 10 }),
    check('question_30').isLength({ min: 10 }),
    check('question_31').isLength({ min: 10 }),
    check('question_32').isLength({ min: 10 }),
    check('question_33').isLength({ min: 10 }),
    check('question_34').isLength({ min: 10 }),
    check('question_35').isLength({ min: 10 }),
    check('question_36').isLength({ min: 10 }),
    check('question_37').isLength({ min: 10 }),
    check('question_38').isLength({ min: 10 }),
    check('question_39').isLength({ min: 10 }),
    check('question_40').isLength({ min: 10 }),
    check('question_41').isLength({ min: 10 }),
    check('question_42').isLength({ min: 10 }),
    check('question_43').isLength({ min: 10 }),
    check('question_44').isLength({ min: 10 }),
    check('question_45').isLength({ min: 10 }),
    check('question_46').isLength({ min: 10 }),
    check('question_47').isLength({ min: 10 }),
    check('question_48').isLength({ min: 10 }),
  ],
  dailyFormsController.postDailyForm
);

module.exports = router;