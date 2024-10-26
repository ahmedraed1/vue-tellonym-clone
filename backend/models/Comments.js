const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    tell: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tells',
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    answer: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('Comments', commentsSchema)
