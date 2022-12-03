const categoriesService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const result = await categoriesService.createCategory(name);
  return res.status(201).json(result);
};

const getCategories = async (_req, res) => {
  const result = await categoriesService.getCategories();
  return res.status(200).json(result);
};

module.exports = {
  createCategory,
  getCategories,
};
