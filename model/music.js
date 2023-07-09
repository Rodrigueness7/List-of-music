const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
  music: String,
  name: { type: String, trim: true },
  url: String,
  link: String

})

module.exports = mongoose.model('Music', musicSchema)
