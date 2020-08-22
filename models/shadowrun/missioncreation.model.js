const mongoose = require('mongoose');
const Mixed = mongoose.Schema.Types.Mixed;

const missioncreationSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  result: {
    type: Mixed,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
	},
	note: {
    type: String
  },
  username: {
    type: String
  }
}, {
  timestamps: true
})

const missioncreation = mongoose.model('shadowrun5mission', missioncreationSchema)

module.exports = missioncreation;
