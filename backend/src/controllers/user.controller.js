const { isEmpty } = require("lodash");

const User = require("../models/user.model");
const { generateOTP, fast2sms } = require("../utils/otp.util");
const ErrorStatus = require("../utils/error.util");

const controls = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();

      return res.status(200).json({ data: users })
    } catch (error) {
      return res.status(error?.code || 500).json({ error: error.message })
    }
  },
  getUser: async (req, res) => {
    try {
      const { id } = req.query;
      const user = await User.findById(id);
      if (!user) {
        throw new ErrorStatus('User not found', 404)
      }

      return res.status(200).json({ data: user })
    } catch (error) {
      return res.status(error?.code || 500).json({ error: error.message })
    }
  },
  createUser: async (req, res) => {
    try {
      const { name, mobileNumber, address, pincode, landmark } = req.body;

      const user = await User.find({ mobileNumber });
      if (!isEmpty(user)) {
        throw new ErrorStatus('User already exists', 403)
      }
      const newUser = await User({ name, mobileNumber, pincode, address, landmark })
      await newUser.save();

      return res.status(201).json({ data: newUser })

    } catch (error) {
      return res.status(error?.code || 500).json({ error: error.message })
    }
  },
}

module.exports = controls;