const express = require('express');
const postController = require('../controllers/post.controller');

const validateToken = require('../middlewares/tokenValidation.middleware');
const validatePost = require('../middlewares/postEditValidation.middleware');

const router = express.Router();

router.get('/', validateToken, postController.getPosts);
router.get('/:id', validateToken, postController.getPostById);
router.put('/:id', validateToken, validatePost, postController.updatePost);
router.delete('/:id', validateToken, postController.deletePost);
// router.post('/', validateToken, postController.);

module.exports = router;
