const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const user = req.body;
  const { type, message, token } = await userService.createUser(user);
  if (type === 409) return res.status(type).json({ message });
  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};
