const mongoose = require('mongoose')

const travelThreat = new mongoose.Schema({
	threat: {
		type: String,
		required: true
	},
	check: {
		type: String,
		required: true
	}
})

const sodlTravelThreat = mongoose.model('sodlthreat', travelThreat)

module.exports = sodlTravelThreat;