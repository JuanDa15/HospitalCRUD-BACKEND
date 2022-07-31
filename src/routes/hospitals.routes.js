// /api/hospitals/
const { Router } = require('express');
const { getHospitals, createHospital, updateHospital, deleteHospital } = require("../controllers/hospitals.controller");
const { validateJWT } = require('../middlewares/validate-jwt.middleware');

const router = new Router();

router.get('/', [validateJWT], getHospitals);
router.post('/', [validateJWT], createHospital);
router.put('/:id',[validateJWT], updateHospital);
router.delete('/:id',[validateJWT], deleteHospital);

module.exports = router;