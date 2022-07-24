const { Schema, model} = require('mongoose');

const userSchema = Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  role: {
    type: String,
    required: true,
    default: 'USER_ROLE'
  },
  google: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: true
  }
});

userSchema.method('toJSON', function() {
  const { __v, _id, password, ...user} = this.toObject();
  user.uid = _id;
  return user;
})

module.exports = model('User', userSchema);