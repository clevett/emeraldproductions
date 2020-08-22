const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  table: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  result: {
    type: Array,
    required: true
  },
  note: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('shadowrun5mission', missionSchema)
