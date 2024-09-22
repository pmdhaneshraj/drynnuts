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
  mobileOtp: Number,
  address: {
    type: String,
    required: true,
    trim: true
  },
  pincode: {
    type: Number,
    required: true,
    trim: true
  },
  landmark: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    enum: ['ADMIN', 'USER'],
    default: 'USER'
  },
  orders: {
    type: Array,
    trim: true
  },
}, {
  timestamps: true,
  versionKey: false,
  id: true,
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id
      delete ret._id
    }
  }
})

module.exports = mongoose.model('User', UserModal)