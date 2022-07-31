// /api/doctors/
const { Router } = require('express');
const { deleteDoctor } = require('../controllers/doctors.controller');
const { getDoctors, createDoctor, updateDoctor } = require("../controllers/doctors.controller");
const { validateJWT } = require('../middlewares/validate-jwt.middleware');

const router = new Router();

router.get('/', [validateJWT], getDoctors);
router.post('/', [validateJWT], createDoctor);
router.put('/:id',[validateJWT], updateDoctor);
router.delete('/:id',[validateJWT], deleteDoctor);

module.exports = router;