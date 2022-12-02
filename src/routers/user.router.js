const express = require('express');
const userController = require('../controllers/user.controller');

const validateDisplayName = require('../middlewares/displayNameValidation.middleware');
const validatePassword = require('../middlewares/passwordValidation.middleware');
const validateEmail = require('../middlewares/emailValidation.middleware');
const validateToken = require('../middlewares/tokenValidation.middleware');

const router = express.Router();

router.get('/', validateToken, userController.getUsers);
router.get('/:id', validateToken, userController.getUserById);
router.post('/', validateDisplayName, validatePassword, validateEmail, userController.createUser);

module.exports = router;
