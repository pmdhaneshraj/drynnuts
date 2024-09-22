const { isEmpty } = require("lodash");

const ErrorStatus = require("../utils/error.util");
const User = require("../models/user.model");
const Order = require("../models/order.model");

const controls = {
  createOrder: async (req, res) => {
    try {
      const { userDetails, products, totalPrice } = req.body;

      const user = await User.find({ mobileNumber: userDetails.mobileNumber });
      if (!isEmpty(user)) {
        throw new ErrorStatus('User already exists', 403)
      }
      const newUser = await User({ ...userDetails })
      await newUser.save();

      const newOrder = await Order({ userId: newUser.id, products, totalPrice })
      await newOrder.save();

      res.status(201).json({ data: newOrder })
    } catch (error) {
      res.status(error.code || 500).json({ error: error.message })
    }
  },
  deleteAll: async (req, res) => {
    try {
      await Order.deleteMany() // For precautions
      const data = await Order.find();
      return res.json({
        message: 'Orders deleted successfully!',
        data
      })
    } catch (error) {
      return res.status(error.code || 500).json({ error: error.message })
    }
  }
}

module.exports = controls