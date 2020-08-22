const mongoose = require('mongoose');

const employerSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  result: {
    type: Array,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  note: {
    type: String,
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('shadowrun5eemployer', employerSchema)

