const mongoose = require('mongoose');

const sodlbestiarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  difficulty: {
    type: Number,
    required: true
  },
  descriptor: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  username: {
    type: String
  }
}, {
  timestamps: true
})

const sodlbestiary = mongoose.model('sodlbeasts', sodlbestiarySchema)

module.exports = sodlbestiary;
