const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const user = req.body;
  const { type, message, token } = await userService.createUser(user);
  if (type === 409) return res.status(type).json({ message });
  return res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  const result = await userService.getUsers();
  return res.status(200).json(result);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userService.getUserById(id);
  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
