const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });
  const { dataValues } = newCategory;
  return dataValues;
};

const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  createCategory,
  getCategories,
};
