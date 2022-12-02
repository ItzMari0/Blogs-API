const express = require('express');
const categoriesController = require('../controllers/categories.controller');

const categoryNameValidation = require('../middlewares/categoryNameValidation.middleware');
const validateToken = require('../middlewares/tokenValidation.middleware');

const router = express.Router();

router.get('/', validateToken, categoriesController.getCategories);
router.post('/', validateToken, categoryNameValidation, categoriesController.createCategory);

module.exports = router;
