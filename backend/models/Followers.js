const mongoose = require('mongoose')

const followersSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    follower: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'User',
      default: [],
      required: false,
      unique: false,
    },
    following: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'User',
      default: [],
      required: false,
      unique: false,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Followers', followersSchema)
