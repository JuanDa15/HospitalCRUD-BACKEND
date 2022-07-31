const Hospital = require('../models/hospital.model');
const { response } = require('express');

const getHospitals = async (req, res=response) => {
  return res.status(200).json({
    ok: true
  });
};

const createHospital = async (req, res=response) => {
  return res.status(200).json({
    ok: true
  });
};
const updateHospital = async (req, res=response) => {
  return res.status(200).json({
    ok: true
  });
};
const deleteHospital = async (req, res=response) => {
  return res.status(200).json({
    ok: true
  });
};

module.exports = { 
  getHospitals,
  createHospital,
  updateHospital,
  deleteHospital
}

