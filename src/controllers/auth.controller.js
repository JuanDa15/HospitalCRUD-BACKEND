const User = require('../models/user.model');
const { compareSync} = require('bcryptjs')
const { response } = require('express');
const { generateJWT } = require('../helpers/jwt');

const login = async (req, res= response) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ 
        ok: false,
        message: 'User or password invalid or not found',
        data: 'Something went wrong with login' 
      });
    }

    // Check password
    const validPassword = compareSync(password, user.password);

    if (!validPassword) {
      return res.status(404).json({ 
        ok: false,
        message: 'User or password invalid or not found',
        data: 'Something went wrong with login' 
      });
    }
    // Generate session token
    const token = await generateJWT(user.id);

    res.status(200).json({
      ok: true,
      message: 'Login successful',
      data: {
        token
      }
    })

  } catch (error) {
    res.status(500).json({
      ok: false,
      message: 'Server error',
      data: error
    })
  }
};

module.exports = { 
  login
}
