const { User } = require('../models');
const { tokenGenerator } = require('../authorization/jwt');

const loginUser = async (email, password) => {
  const users = await User.findAll();
  const result = users.find((user) => user.email === email && user.password === password);
  if (!result) return false;
  const { password: _, ...userWithoutPassword } = result.dataValues;
  const token = tokenGenerator(userWithoutPassword);
  return { result: userWithoutPassword, token };
};

const createUser = async ({ displayName, email, password, image }) => {
  const sameEmail = await User.findOne({ where: { email } });
  if (sameEmail) return { type: 409, message: 'User already registered' };
  const user = await User.create({ displayName, email, password, image });
  const { password: _, ...userWithoutPassword } = user.dataValues;
  const token = tokenGenerator(userWithoutPassword);
  return { result: userWithoutPassword, token };
};

const getUsers = async () => {
  const users = await User.findAll();
  return users.map((user) => {
    const { password: _, ...userWithoutPassword } = user.dataValues;
    return userWithoutPassword;
  });
};

module.exports = {
  loginUser,
  createUser,
  getUsers,
};
