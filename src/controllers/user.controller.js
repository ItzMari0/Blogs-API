const userService = require('../services/user.service');

const createUser = async (req, res) => {
  const user = req.body;
  const { token } = await userService.createUser(user);
  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};
