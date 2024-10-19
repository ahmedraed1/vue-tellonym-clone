const User = require('../models/User')
const GetAuthenticatedUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId })
    if (!user) {
      throw new Error('User not found')
    }
    res.status(200).json({ user })
  } catch (error) {
    res.status(404).json({ message: 'User not found', error: error.message })
  }
}

module.exports = { GetAuthenticatedUser }
