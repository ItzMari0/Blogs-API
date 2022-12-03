const { BlogPost, User, Category } = require('../models');

const getPosts = async () => {
  const blogPosts = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });
  return blogPosts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, { include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });
  if (!post) return { type: 404, message: 'Post does not exist' };
  return { message: post };
};

module.exports = {
  getPosts,
  getPostById,
};
