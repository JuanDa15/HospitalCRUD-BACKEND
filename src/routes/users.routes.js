/**
 * [Route] = '/api/users
 */
const { Router } = require('express');
const { getUsers, createUser, updateUser,deleteUser } = require('../controllers/users.controller')
const { check } = require('express-validator');
const { validateRequest} = require('../middlewares/validate-request.middleware');
const { validateJWT } = require('../middlewares/validate-jwt.middleware');
const router = new Router();

router.get('/', [validateJWT], getUsers);
router.post('/',[
  validateJWT,
  check('name', 'name is required').not().isEmpty(),
  check('password', 'password is required').not().isEmpty(),
  check('email', 'email is required').not().isEmpty(),
  check('email', 'email format is invalid').isEmail(),
  validateRequest
], createUser);
router.put('/:uid', [validateJWT], updateUser),
router.delete('/:uid', [validateJWT], deleteUser)

module.exports = router;