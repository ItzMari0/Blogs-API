const postService = require('../services/post.service');

const getPosts = async (_req, res) => {
  const result = await postService.getPosts();
  return res.status(200).json(result); 
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await postService.getPostById(id);
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  getPosts,
  getPostById,
};
