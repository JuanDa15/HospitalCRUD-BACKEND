const jwt = require('jsonwebtoken');

const generateJWT = ( uid ) => {

 return new Promise((resolve, reject ) => {
  const payload = {
    uid: uid,
  };

  jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: '12h'
  }, (err, token) => {
    if ( err ) {
      reject(err);
    } else {
      resolve(token);
    }
    
  })
 })
}

module.exports = {
  generateJWT
}