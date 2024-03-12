const express = require('express');
const { check } = require('express-validator');

const usersControllers = require('../controllers/users-controller');
const verifyJWT = require('../middleware/verify-JWT.JS');

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

router.post('/login', usersControllers.login);

router.get('/', usersControllers.getAllUsers);
router.get('/:userid', usersControllers.getUserById);
router.post('/', usersControllers.createNewUser);
// router.post(
//   '/',
//   [
//     check('name').not().isEmpty(),
//     check('email').normalizeEmail().isEmail(),
//     check('roles').not().isEmpty(),
//     check('active').not().isEmpty(),
//   ],
//   usersControllers.createUser
// );
router.patch('/', usersControllers.updateUser);
router.post(
  '/:userid',
  [
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('roles').not().isEmpty(),
    check('active').not().isEmpty(),
  ],
  usersControllers.updateUserById
);
router.delete('/:userid', usersControllers.deleteUser);

module.exports = router;
