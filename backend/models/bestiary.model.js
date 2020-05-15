const mongoose = require('mongoose');

const bestiarySchema = new mongoose.Schema({
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

const Beast = mongoose.model('Beast', bestiarySchema)

module.exports = Beast;
