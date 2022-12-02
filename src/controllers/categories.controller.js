const controllerService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const result = await controllerService.createCategory(name);
  return res.status(201).json(result);
};

module.exports = {
  createCategory,
};
