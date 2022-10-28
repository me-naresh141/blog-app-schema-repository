// <!-- Each comment can have fields:- -->

// content
// author -> ID of user
// article ->
// timestamps()

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let commentSchema = new Schema(
  {
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    article: [{ type: Schema.Types.ObjectId, ref: 'Article' }],
  },
  { timestamps: true },
)

module.exports = mongoose.model('Comment', commentSchema)
