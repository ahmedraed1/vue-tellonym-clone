const { StatusCodes } = require('http-status-codes')
const User = require('../models/User')
const Followers = require('../models/Followers')

const searchUsers = async (req, res) => {
  const { search } = req.query
  const id = req.user.userId
  const users = await User.find({
    name: { $regex: search, $options: 'i' },
    _id: { $ne: id },
  })
  res.status(StatusCodes.OK).json({ users })
}

const getUser = async (req, res) => {
  const { username } = req.params
  const user = await User.findOne({ username })
  res.status(StatusCodes.OK).json(user)
}

const getFriends = async (req, res) => {
  const id = req.user.userId
  const users = await Followers.findOne(
    { user: id },
    { follower: 1, following: 1, _id: 0 },
  )
  const friends = [...new Set([...users.follower, ...users.following])]
  const friendObjects = await Promise.all(
    friends.map(friend => User.findById(friend).select('name username')),
  )
  res.status(StatusCodes.OK).json({ users, friendObjects })
}

module.exports = { searchUsers, getUser, getFriends }
