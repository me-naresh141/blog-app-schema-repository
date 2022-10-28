// <!-- Each user can have fields:- -->

// name
// email
// age

let mongoose = require('mongoose')

let userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, match: /@/, required: true },
    age: { type: Number, required: true },
    article: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
  },
  { timestamps: true },
)

module.exports = mongoose.model('User', userSchema)
