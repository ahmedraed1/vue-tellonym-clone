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
  const id = req.params.id
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

const followUser = async (req, res) => {
  const { id } = req.params
  const { userId } = req.user
  const findUser = await Followers.findOne({
    user: userId,
    $and: [{ following: id }],
  })
  if (findUser) {
    return res
      .status(StatusCodes.OK)
      .json({ status: false, message: 'User already followed' })
  }
  await Followers.findOneAndUpdate(
    { user: id },
    { $push: { follower: userId } },
    { new: true },
  )
  await Followers.findOneAndUpdate(
    { user: userId },
    { $push: { following: id } },
    { new: true },
  )
  res
    .status(StatusCodes.OK)
    .json({ status: true, message: 'User followed successfully' })
}

module.exports = { searchUsers, getUser, getFriends, followUser }
