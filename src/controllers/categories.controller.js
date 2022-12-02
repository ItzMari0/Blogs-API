const controllerService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const result = await controllerService.createCategory(name);
  return res.status(201).json(result);
};

const getCategories = async (req, res) => {
  const result = await controllerService.getCategories();
  return res.status(200).json(result);
};

module.exports = {
  createCategory,
  getCategories,
};
