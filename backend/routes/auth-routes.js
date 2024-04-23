const express = require('express');
// const { check } = require('express-validator');

const authControllers = require('../controllers/auth-controller');
const loginLimiter = require('../middleware/login-limiter');

const router = express.Router();

router.post('/', loginLimiter, authControllers.login);
router.post('/send-email', authControllers.sendEmail);
router.post('/reset-password', authControllers.resetPassword);
router.post('/logout', authControllers.logout);
router.get('/refresh', authControllers.refresh);

module.exports = router;
