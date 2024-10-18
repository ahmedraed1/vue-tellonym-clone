const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
// const { UnauthenticatedError } = require('../errors/unauthenticated')

const auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    res.status(StatusCodes.UNAUTHORIZED).send({ msg: 'Authentication invalid' })
  }
  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    // attach the user to the job routes
    req.user = { userId: payload.userId, name: payload.name }
    next()
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.UNAUTHORIZED).send({ msg: 'Authentication invalid' })
  }
}

module.exports = auth
