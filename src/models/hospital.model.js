const { Schema, model} = require('mongoose');

const HospitalSchema = Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { collection: 'Hospitals'});

HospitalSchema.method('toJSON', function() {
  const { __v, _id, ...hospital} = this.toObject();
  hospital.uid = _id;
  return hospital;
})

module.exports = model('Hospital', HospitalSchema);