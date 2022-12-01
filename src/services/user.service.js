const { User } = require('../models');

const getUser = async (email) => {
  const users = await User.findAll();
  const result = users.find((user) => user.email === email);
  if (!result) return false;
  return result;
};

module.exports = {
  getUser,
};
