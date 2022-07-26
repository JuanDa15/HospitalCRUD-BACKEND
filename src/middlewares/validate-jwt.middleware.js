const jwt = require('jsonwebtoken');

const validateJWT = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      ok: false,
      message: 'Invalid authorization header',
      data: 'No authorization header was specified'
    })
  };

  try {
    const { uid } = jwt.verify(authorization, process.env.JWT_KEY);
    req.uid = uid;

    next();

  } catch (err) {
    return res.status(401).json({
      ok: false,
      message: 'Error validating authorization token or invalid token',
      data: err
    })
  }

};


module.exports = {
  validateJWT
};