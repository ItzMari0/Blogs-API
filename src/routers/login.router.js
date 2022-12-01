const express = require('express');
const loginController = require('../controllers/login.controller');

const validateLogin = require('../middlewares/loginValidation.middleware');

const router = express.Router();

router.post('/', validateLogin, loginController.loginUser);

module.exports = router;
