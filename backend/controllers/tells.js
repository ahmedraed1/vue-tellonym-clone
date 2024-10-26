const Tells = require('../models/Tells')
const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

const getTells = async (req, res) => {
  const tells = await Tells.find({ toUser: req.user.userId }, { __v: 0 }).sort({
    createdAt: -1,
  })
  res.status(StatusCodes.OK).json({ tells })
}

const sendTell = async (req, res) => {
  const { tell, isPrivate, toUser } = req.body
  const teller = req.user.userId
  await Tells.create({ tell, teller, toUser, isPrivate })
  res.status(StatusCodes.CREATED).json({ message: 'Tell sent successfully' })
}

const answerTell = async (req, res) => {
  const { id } = req.params
  const { answer } = req.body
  await Tells.findOneAndUpdate({ _id: id }, { answer }, { new: true })
  res.status(StatusCodes.OK).json({ message: 'Answer sent successfully' })
}

const getTellsByUsername = async (req, res) => {
  const { username } = req.params
  const user = await User.findOne({ username })
  if (!user) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' })
  }
  const id = user._id
  const tells = await Tells.find(
    { toUser: id, answer: { $ne: null } },
    { __v: 0, teller: 0 },
  ).sort({ createdAt: -1 })
  res.status(StatusCodes.OK).json({ tells, username: user.username })
}

module.exports = { getTells, sendTell, answerTell, getTellsByUsername }
