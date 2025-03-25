const { isEmpty } = require("lodash");
const moment = require("moment")

const ErrorStatus = require("../utils/error.util");
const User = require("../models/user.model");
const Order = require("../models/order.model");
const { getOrderId } = require("../utils/order.utli");

const controls = {
  getOrderDetails: async (req, res) => {
    try {
      const { orderId } = req.query;
      const order = await Order.findOne({ orderId });
      if (order) {
        return res.json({ error: false, data: order })
      }

      return res.json({ error: true, data: 'Invalid Order ID' })
    } catch (error) {
      return res.json({ error: true, data: error.message })
    }
  },
  createOrder: async (req, res) => {
    try {
      const { userDetails, products, totalPrice } = req.body;

      const user = await User.findOne({ mobileNumber: userDetails.mobileNumber });
      let userId = null;
      if (user) {
        userId = user.id
      } else {
        const newUser = await User({ ...userDetails })
        await newUser.save();
        userId = newUser.id;
      }

      const orders = await Order.find({ date: moment().format('yyyy-MM-DD') })
      const orderId = await getOrderId(orders.length + 1);
      const newOrder = await Order({ orderId, userId, products, totalPrice, date: moment().format('yyyy-MM-DD') })
      await newOrder.save();

      return res.status(201).json({ data: newOrder })
    } catch (error) {
      return res.status(error.code || 500).json({ error: true, data: error.message })
    }
  },
}

module.exports = controls