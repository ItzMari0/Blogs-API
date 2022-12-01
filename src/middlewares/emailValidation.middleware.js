module.exports = (req, res, next) => {
  const { email } = req.body;
  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!EMAIL.test(email)) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }
  return next();
};
