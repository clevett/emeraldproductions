const mongoose = require('mongoose');

const jobTypeSchema = new mongoose.Schema({
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

const jobtype = mongoose.model('shadowrun5ejobtype', jobTypeSchema)

module.exports = jobtype;
