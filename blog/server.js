let express = require('express')
let mongoose = require('mongoose')
let Article = require('./modals/Article')
let Comment = require('./modals/Comment')
let User = require('./modals/User')

mongoose.connect('mongodb://localhost/blog', (err) => {
  console.log(err ? err : 'sucessfully conected')
})

let app = express()

app.listen(4000, () => {
  console.log('server listing port 4000')
})
