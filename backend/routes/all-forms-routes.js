const express = require('express');
const allFormsController = require('../controllers/all-forms-controller');

const router = express.Router();

router.get('/', allFormsController.getAllForms);

module.exports = router;
