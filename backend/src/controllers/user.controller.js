const { isEmpty } = require("lodash");
const bcrypt = require('bcrypt')

const User = require("../models/user.model");
const { generateOTP, fast2sms } = require("../utils/otp.util");

const controls = {
  create: async (req, res) => {
    const { name, password, email, mobileNumber } = req.body;
    const saltRounds = process.env.SALT_ROUNDS;

    const user = await User.find({ $or: [{ email }, { mobileNumber }] });
    if (isEmpty(user)) {
      try {
        bcrypt
          .genSalt(Number(saltRounds))
          .then(salt => {
            return bcrypt.hash(password, salt)
          })
          .then(async hash => {
            console.log('s: ', hash)
            const newUser = new User({
              name, password: hash, email, mobileNumber
            })
            await newUser.save();
            res.json('User created successfully!')
          })
          .catch(err => console.error(err.message))
      } catch (error) {
        res.json(error)
      }
    } else {
      res.json('User already exist')
    }

  },
  read: async (req, res) => {
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

      // const userExist = await User.findOne({ mobileNumber });
      // if (userExist) {
      //   res.status(403).json({
      //     message: "User already exists",
      //     data: userExist
      //   })
      //   return
      // }

      const createUser = new User({
        name,
        mobileNumber,
        role: mobileNumber === process.env.ADMIN_PHONE ? 'ADMIN' : 'USER'
      });

      const user = await createUser.save();

      const otp = generateOTP(6);
      user.mobileOtp = otp

      console.log(otp, user)


      await user.save();

      await fast2sms({
        message: `Your OTP is ${otp}`,
        contactNumber: user.mobileNumber
      })

      res.status(200).json({
        type: "success",
        message: "Account created OTP sended to mobile number",
        data: {
          userId: user,
        },
      });
    } catch (error) {
      res.json(error)
    }
  }
}

module.exports = controls;