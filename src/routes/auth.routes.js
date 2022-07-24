/**
 * [Route] = '/api/auth
 */
const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth.controller');
const { validateRequest } = require('../middlewares/validate-request.middleware');

const router = new Router();

router.post('/login', [
  check('password', 'password is required').not().isEmpty(),
  check('email', 'email is required').not().isEmpty(),
  check('email', 'email format is invalid').isEmail(),
  validateRequest
], login);

module.exports = router;