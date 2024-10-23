const { StatusCodes } = require('http-status-codes')
const User = require('../models/User')

const searchUsers = async (req, res) => {
  const { searchQuery } = req.query
  const users = await User.find({
    name: { $regex: searchQuery, $options: 'i' },
  })
  res.status(StatusCodes.OK).json({ users })
}

const getUser = async (req, res) => {
  const { username } = req.params
  const user = await User.findOne({ username })
  res.status(StatusCodes.OK).json(user)
}

module.exports = { searchUsers, getUser }
