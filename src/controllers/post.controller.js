const postService = require('../services/post.service');

const getPosts = async (_req, res) => {
  const result = await postService.getPosts();
  return res.status(200).json(result); 
};

module.exports = {
  getPosts,
};
