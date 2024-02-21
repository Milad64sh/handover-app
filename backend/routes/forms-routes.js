const express = require('express');
const formControllers = require('../controllers/forms-controller');

const router = express.Router();

router.get('/:formid', formControllers.getFormById);

router.get('/user/:uid', formControllers.getFormByUserId);

router.post('/', formControllers.createForm);

module.exports = router;
