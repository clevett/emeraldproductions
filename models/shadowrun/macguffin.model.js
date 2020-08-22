const mongoose = require('mongoose');

const macGuffinSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  result: {
    type: Number,
    required: true
  },
  source: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('shadowrun5emacguffins', macGuffinSchema)
