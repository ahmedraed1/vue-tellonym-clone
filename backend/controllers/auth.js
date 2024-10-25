require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const Followers = require('../models/Followers')
const { StatusCodes } = require('http-status-codes')

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Invalid password' })
    }
    const token = jwt.sign(
      { userId: user._id, name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_LIFT_TIME,
      },
    )
    res
      .status(StatusCodes.OK)
      .json({ message: 'Login successful', user, token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

const register = async (req, res) => {
  try {
    const { name, isAgree, username, email, password } = req.body
    const user = await User.create({
      name,
      username,
      email,
      password,
      isAgree,
    })
    if (!user) {
      throw new Error('Something went wrong, User not created :(')
    }
    const token = await user.createJWT()
    await Followers.create({ user: user._id })
    res.status(StatusCodes.CREATED).json({
      message: 'User created successfully',
      user,
      token,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error', error })
  }
}

module.exports = { login, register }
