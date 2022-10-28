// Each article can have fields :-

// title
// description
// tags
// likes
// author -> ID of user
// comments
// timestamps()

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let articleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [{ type: String, required: true }],
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true },
)

module.exports = mongoose.model('Article', articleSchema)
