const userService = require('../services/user.service');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const result = await userService.getUser(email, password);
  if (result === false) return res.status(400).json({ message: 'Invalid fields' });
  return res.status(200).json({ message: result });
};

module.exports = {
  loginUser,
};
