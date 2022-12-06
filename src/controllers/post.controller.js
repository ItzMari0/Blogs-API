const postService = require('../services/post.service');
const jwt = require('../authorization/jwt');

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

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const userId = jwt.tokenDecode(authorization);
  const { title, content } = req.body;
  const { type, message } = await postService.updatePost(id, title, content, userId);
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;
  const userId = jwt.tokenDecode(authorization);
  const { type, message } = await postService.createPost({ title, content, categoryIds, userId });
  if (type) return res.status(type).json({ message });
  return res.status(201).json(message);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const userId = jwt.tokenDecode(authorization);
  const { type, message } = await postService.deletePost(id, userId);
  if (type) return res.status(type).json({ message });
  return res.status(204).json(message);
};

module.exports = {
  getPosts,
  getPostById,
  updatePost,
  createPost,
  deletePost,
};
