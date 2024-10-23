const Tells = require('../models/Tells')
const { StatusCodes } = require('http-status-codes')

const getTells = async (req, res) => {
  const tells = await Tells.find(
    { toUser: req.user.userId },
    { tell: 1, toUser: 1, isPrivate: 1, createdAt: 1, likes: 1, _id: 0 },
  ).sort({ createdAt: -1 })
  res.status(StatusCodes.OK).json({ tells })
}

const sendTell = async (req, res) => {
  const { tell, isPrivate, toUser } = req.body
  const teller = req.user.userId
  await Tells.create({ tell, teller, toUser, isPrivate })
  res.status(StatusCodes.CREATED).json({ message: 'Tell sent successfully' })
}
module.exports = { getTells, sendTell }
