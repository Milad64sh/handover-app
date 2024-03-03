const express = require('express');
const { check } = require('express-validator');

const usersControllers = require('../controllers/users-controller');
const verifyJWT = require('../middleware/verify-JWT.JS');
// const fileUpload = require('../middleware/file-upload');

const router = express.Router();
// router.use(verifyJWT);

// router.get('/', usersControllers.getUsers);

router.post(
  '/signup',
  [
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 8 }),
  ],
  usersControllers.signUp
);

// router.post('/login', usersControllers.login);

router.get('/', usersControllers.getAllUsers);
router.post('/', usersControllers.createNewUser);
router.patch('/', usersControllers.updateUser);
router.delete('/', usersControllers.deleteUser);

module.exports = router;
