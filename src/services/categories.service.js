const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });
  const { dataValues } = newCategory;
  return dataValues;
};

module.exports = {
  createCategory,
};
