const express = require('express');
const { check } = require('express-validator');
const formControllers = require('../controllers/forms-controller');

const router = express.Router();

router.get('/:formid', formControllers.getFormById);

router.get('/user/:uid', formControllers.getFormsByUserId);

router.post(
  '/',
  [
    check('service').not().isEmpty(),
    check('week').not().isEmpty(),
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
  ],
  formControllers.createForm
);

router.patch(
  '/:formid',
  [
    check('service').not().isEmpty(),
    check('week').not().isEmpty(),
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
  ],
  formControllers.updateFormById
);

router.delete('/:formid', formControllers.deleteForm);

module.exports = router;
