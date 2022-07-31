const Doctor = require('../models/doctor.model');
const { response } = require('express');

const getDoctors = async (req, res=response) => {
  return res.status(200).json({
    ok: true
  });
};

const createDoctor = async (req, res=response) => {
  return res.status(200).json({
    ok: true
  });
};
const updateDoctor = async (req, res=response) => {
  return res.status(200).json({
    ok: true
  });
};
const deleteDoctor = async (req, res=response) => {
  return res.status(200).json({
    ok: true
  });
};

module.exports = { 
  getDoctors,
  createDoctor,
  updateDoctor,
  deleteDoctor
}

