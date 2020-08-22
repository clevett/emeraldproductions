const mongoose = require('mongoose');

const shadowrunMissionSchema = new mongoose.Schema({
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
  },
  note: {
    type: String,
  },
  username: {
    type: String
  }
}, {
  timestamps: true
})

const shadowrunMission = mongoose.model('jobtype', shadowrunMissionSchema)

module.exports = shadowrunMission;
