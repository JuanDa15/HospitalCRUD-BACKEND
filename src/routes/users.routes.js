/**
 * [Route] = '/api/users
 */
const { Router } = require('express');
const { getUsers, createUser, updateUser,deleteUser } = require('../controllers/users.controller')
const { check } = require('express-validator');
const { validateRequest} = require('../middlewares/validate-request.middleware')
const router = new Router();

router.get('/', getUsers);
router.post('/',[
  check('name', 'name is required').not().isEmpty(),
  check('password', 'password is required').not().isEmpty(),
  check('email', 'email is required').not().isEmpty(),
  check('email', 'email format is invalid').isEmail(),
  validateRequest
], createUser);
router.put('/:uid', updateUser),
router.delete('/:uid', deleteUser)

module.exports = router;