import mongoose from 'mongoose'

const TweetSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    // required: true
  },
  content: {
    type: 'String',
    maxlength: 300,
    required: true
  }
}, {timestamps: true})

export default mongoose.models.Tweet || mongoose.model('Tweet', TweetSchema)