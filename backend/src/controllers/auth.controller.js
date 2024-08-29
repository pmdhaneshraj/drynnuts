const { isEmpty } = require("lodash");
const bcrypt = require('bcrypt')

const User = require("../models/user.model");
const { generateOTP, fast2sms } = require("../utils/otp.util");

const controls = {
  createUserWithEmailPassword: async (req, res) => {
    const { firstname, lastname, password, email, mobileNumber } = req.body;
    const saltRounds = process.env.SALT_ROUNDS || 10;

    const user = await User.find({ $or: [{ email }, { mobileNumber }] });
    if (isEmpty(user)) {
      try {
        bcrypt
          .genSalt(Number(saltRounds))
          .then(salt => {
            return bcrypt.hash(password, salt)
          })
          .then(async hash => {
            await User.create({
              firstname, lastname, password: hash, email, mobileNumber
            })
            const userData = new User({
              firstname, lastname, email, mobileNumber
            })
            await userData.save()
            res.json({
              message: 'User created successfully!',
              responseBody: userData
            })
          })
          .catch(err => console.error(err.message))
      } catch (error) {
        res.json(error)
      }
    } else {
      res.status(403).json({
        message: 'User already exist'
      })
    }
  },
  verifyUserWithPassword: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!isEmpty(user)) {
        if (user.password === password) {
          return res.json('User Logined in Successfully')
        }
        throw new Error('Invalid Password')
      } else {
        throw new Error('Invalid Username')
      }
    } catch (error) {
      res.json(error.message)
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