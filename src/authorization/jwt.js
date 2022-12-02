const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const tokenGenerator = (userWithoutPassword) => jwt
  .sign({ data: userWithoutPassword }, secret, jwtConfig);

const tokenVerify = (authorization) => {
  try {
    const payload = jwt.verify(authorization, secret);
    return { type: null, message: payload };
  } catch (error) {
    return { type: 401, message: 'Expired or invalid token' };
  }
}; 

module.exports = {
  tokenGenerator,
  tokenVerify,
};
