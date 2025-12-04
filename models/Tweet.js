import mongoose from 'mongoose'

const TweetSchema = new mongoose.Schema({
  author: {
    id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    username: {type: String, required: true}
  },
  content: {
    type: 'String',
    maxlength: 300,
    required: true
  },
  liked: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {timestamps: true})

export default mongoose.models.Tweet || mongoose.model('Tweet', TweetSchema)