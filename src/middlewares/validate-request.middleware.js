const { response } = require('express');
const { validationResult } = require('express-validator');

const validateRequest = (req, res = response, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({
      ok: false,
      message: 'Validation errors',
      data: errors.mapped()
    })
  }

  next();
}

module.exports = {
  validateRequest
}