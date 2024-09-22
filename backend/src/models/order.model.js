const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const orderModel = mongoose.Schema({
  userId: {
    type: Schema.ObjectId,
    required: true,
    trim: true
  },
  products: {
    type: Array,
    required: true,
    trim: true
  },
  totalPrice: Number,
  status: {
    type: String,
    enum: ['PLACED', 'PROCESSING', 'SHIPPED', 'DELIVERED'],
    default: 'PLACED'
  },
  paymentStatus: {
    type: String,
    enum: ['PENDING', 'SUCCESS', 'FAILED'],
    default: 'PENDING'
  }
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
});

module.exports = mongoose.model('Order', orderModel)