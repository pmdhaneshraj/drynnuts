const mongoose = require('mmongoose');

const orderModel = mongoose.schema({
  data: Date.now()
});

modules.exports = mongoose.model('Order', orderModel)