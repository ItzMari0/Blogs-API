const { User } = require('../models');
const { tokenGenerator } = require('../authorization/jwt');

const getUser = async (email, password) => {
  const users = await User.findAll();
  const result = users.find((user) => user.email === email && user.password === password);
  if (!result) return false;
  const { password: _, ...userWithoutPassword } = result.dataValues;
  const token = tokenGenerator(userWithoutPassword);
  return { result: userWithoutPassword, token };
};

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  const { password: _, ...userWithoutPassword } = user.dataValues;
  const token = tokenGenerator(userWithoutPassword);
  return { result: userWithoutPassword, token };
};

module.exports = {
  getUser,
  createUser,
};
