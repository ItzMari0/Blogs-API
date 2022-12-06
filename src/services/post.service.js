const { BlogPost, User, Category, PostCategory, Sequelize } = require('../models');

const { Op } = Sequelize;

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

const updatePost = async (id, title, content, userId) => {
  const verify = await BlogPost.findOne({ where: { id } });
  if (verify.userId !== userId) {
    return { type: 401, message: 'Unauthorized user' };
  }
  await BlogPost.update({ title, content }, { where: { id } });
  const post = await getPostById(id);
  return post;
};

const createPost = async ({ title, content, categoryIds, userId }) => {
  const verify = await Promise.all(categoryIds.map(async (id) => {
    const categories = await Category.findOne({ where: { id } });
    return categories;
  }));
  if (verify.includes(null)) {
    return { type: 400, message: 'one or more "categoryIds" not found' };
  }
  const newPost = await BlogPost.create({ title, content, categoryIds, userId });
  const { id } = newPost.dataValues;
  await Promise.all(categoryIds.map(async (categoryId) => {
    await PostCategory.create({ postId: id, categoryId });
  }));
  return { type: null, message: newPost };
};

const deletePost = async (id, userId) => {
  const post = await BlogPost.findByPk(id);
  if (!post) return { type: 404, message: 'Post does not exist' };
  const verify = await BlogPost.findOne({ where: { id } });
  if (verify.userId !== userId) {
    return { type: 401, message: 'Unauthorized user' };
  }
  await BlogPost.destroy({ where: { id } });
  return { type: 204 };
};

const searchPost = async (query) => {
  const searchResult = await BlogPost.findAll({
    where: { [Op.or]: { title: { [Op.like]: `%${query}%` },
    content: { [Op.like]: `%${query}%` } } }, 
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });
  return searchResult;
};

module.exports = {
  getPosts,
  getPostById,
  updatePost,
  createPost,
  deletePost,
  searchPost,
};
