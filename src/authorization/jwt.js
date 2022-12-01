const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const tokenGenerator = (userWithoutPassword) => jwt
  .sign({ data: userWithoutPassword }, secret, jwtConfig);

module.exports = {
  tokenGenerator,
};
