const mongoose = require('mongoose');

/* Definición del Esquema */
const {Schema} = mongoose

const UserModelSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  randomNumber: {
    type: Number,
    required: true,
    default: Math.floor(Math.random() * (99 - 1 + 1) + 1)
  },
  date: { type: Date, default: Date.now }
})


const UserModel = mongoose.model('UserModel', UserModelSchema);
module.exports = UserModel;