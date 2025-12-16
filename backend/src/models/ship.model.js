const { default: mongoose } = require("mongoose");

const ShipModel = mongoose.Schema({
  token: String,
  created: String,
  expiry: String
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

module.exports = mongoose.model('Ship', ShipModel)