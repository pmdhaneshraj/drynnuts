const mongoose = require('mongoose');

const productModal = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  priceList: {
    type: Array,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: String,
    trim: true
  },
  rating: Number,
  reviews: Array
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

module.exports = mongoose.model('Product', productModal);