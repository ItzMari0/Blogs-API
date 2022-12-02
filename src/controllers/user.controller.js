const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const user = req.body;
  const { type, message, token } = await userService.createUser(user);
  if (type === 409) return res.status(type).json({ message });
  return res.status(201).json({ token });
};

const getUsers = async (req, res) => {
  const result = await userService.getUsers();
  return res.status(200).json(result);
};

module.exports = {
  createUser,
  getUsers,
};
