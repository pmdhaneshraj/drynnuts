const mongoose = require('mongoose')

const UserModal = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  mobileNumber: {
    type: Number,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    enum: ['ADMIN', 'USER'],
    default: 'USER'
  },
  mobileOtp: String,
  orders: {
    type: Array,
    trim: true
  },
}, { versionKey: false })

module.exports = mongoose.model('User', UserModal)