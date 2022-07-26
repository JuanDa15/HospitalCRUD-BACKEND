const User = require('../models/user.model');
const { response } = require('express');
const { genSaltSync, hashSync} = require('bcryptjs');
const { generateJWT } = require('../helpers/jwt');


const getUsers = async (req, res) => {
  const users =  await User.find({}, 'name email role google uid');
  res.json({
    ok: true,
    data: users
  });
}

const createUser = async (req, res = response) => {
  const { email, password, name } = req.body;
  try {
    const existEmail = await User.findOne({ email: email});

    if (existEmail) {
      return res.status(400).json({  
        ok:false,
        message: 'Email already exists',
        data: { email: existEmail }
      })
    }
    const user = new User(req.body);
    
    // Encrypt password
    const salt = genSaltSync();
    user.password = hashSync(password, salt);
    
    // Save user
    await user.save();

    // Generate session token
    const token = await generateJWT(user.id);

    res.json({
      ok: true,
      message: 'User created successfully',
      data: {
        user,
        token
      }
    });
  } catch(error) {
    res.status(500).json({
      ok: false,
      message: 'Error creating user',
      data: error
    })
  }

}

const updateUser = async (req, res = response) => {
  const { uid } = req.params;
  const {google, role, email, ...body} = req.body;
  try {

    const user = await User.findById(uid);

    (user.email !== email) && (body.email = email);
    const existEmail = await User.findOne({ email});

    ( !user ) && 
      res.status(404).json({ ok:true, message: 'User not found', data: { uid: uid } });
    
    (existEmail) && 
      res.status(400).json({ ok:false, message: 'Email already exists', data: { email: existEmail } })

    delete body?.google;
    delete body?.role;

    const updatedUser = await User.findByIdAndUpdate(uid, body, { new: true});
    // UPDATE
    res.json({
      ok: true,
      message: 'User updated successfully',
      data: updatedUser
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: 'Server error',
      data: error
    })
  }
}

const deleteUser = async (req, res = response) => {
  try {

    const { uid } = req.params;

    let user = await User.findById(uid);
    if (user) {
      user = await User.findByIdAndUpdate(uid, {active: false}, {new:true});
      
      res.json({
        ok: true,
        message: 'User deleted successfully',
        data: user
      })
    }
    else { 
      res.json({
        ok: false,
        message: 'User not found',
        data: {uid}
      })
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: 'Server error',
      data: error
    })
  }
}

module.exports = { 
  getUsers,
  createUser,
  updateUser,
  deleteUser
}

