const express = require('express');
const { check } = require('express-validator');

const authControllers = require('../controllers/auth-controller');
const loginLimiter = require('../middleware/login-limiter');

const router = express.Router();

router.post('/', loginLimiter, authControllers.login);
router.get('/refresh', authControllers.refresh);
router.post('/logout', authControllers.logout);

module.exports = router;
