const express = require('express');
const { check } = require('express-validator');
const weeklyFormControllers = require('../controllers/weekly-forms-controller');
const checkAuth = require('../middleware/check-auth');
const verifyJWT = require('../middleware/verify-JWT.JS');

const router = express.Router();
// router.use(verifyJWT);

router.get('/', weeklyFormControllers.getAllForms);
router.get('/:formid', weeklyFormControllers.getFormById);
router.get('/user/:uid', weeklyFormControllers.getFormsByUserId);

router.use(checkAuth);

router.delete('/:formid', weeklyFormControllers.deleteForm);

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
  weeklyFormControllers.createForm
);

router.post(
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
  weeklyFormControllers.updateFormById
);

module.exports = router;
