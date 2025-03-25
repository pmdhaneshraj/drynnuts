const User = require("../models/user.model");
const { generateOTP, fast2sms } = require("../utils/otp.util");

const controls = {
  getOtp: async (req, res) => {
    try {
      const { mobileNumber } = req.query;
      const user = await User.findOne({ mobileNumber });
      if (user) {
        const otp = generateOTP(6);
        user.mobileOtp = otp;
        await user.save();
        //TODO: send otp sms to user
        return res.json({ data: 'OTP sent to mobile number' });
      }

      return res.json({ error: 'User not exists' })

    } catch (error) {
      return res.json({ error: true, data: error.message })
    }
  },
  verifyOtp: async (req, res) => {
    try {
      const { mobileNumber, otp } = req.body;
      const user = await User.findOne({ mobileNumber });
      if (user) {
        if (user.mobileOtp === Number(otp)) {
          user.mobileOtp = null;
          await user.save()
          return res.json({ error: false, data: 'OTP verified successfully' })
        }
        return res.json({ error: true, data: 'Invalid OTP' })
      }

      return res.json({ error: true, data: 'User not exist' })

    } catch (error) {
      return res.json({ error: error.message })
    }
  },
  createUserWithMobile: async (req, res) => {
    try {
      const { name, mobileNumber } = req.body;

      const userExist = await User.find({ mobileNumber });
      if (userExist) {
        res.status(403).json({
          message: "User already exists"
        })
        return
      }

      const createUser = new User({
        name,
        mobileNumber,
        role: mobileNumber === process.env.ADMIN_PHONE ? 'ADMIN' : 'USER'
      });

      const user = await createUser.save();

      const otp = generateOTP(6);
      user.mobileOtp = otp

      await user.save();

      await fast2sms({
        message: `Your OTP is ${otp}`,
        contactNumber: user.mobileNumber
      })
    } catch (error) {
      res.json(error)
    }
  }
}

module.exports = controls;