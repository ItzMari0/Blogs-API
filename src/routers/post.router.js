const express = require('express');
const postController = require('../controllers/post.controller');

const validateToken = require('../middlewares/tokenValidation.middleware');

const router = express.Router();

router.get('/', validateToken, postController.getPosts);
// router.post('/', validateToken, postController.);

module.exports = router;
