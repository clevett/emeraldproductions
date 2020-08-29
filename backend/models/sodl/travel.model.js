const mongoose = require('mongoose')

const travelThreat = new mongoonse.Schema({
	threat: {
		type: String,
		required: true
	},
	check: {
		type: String,
		required: true
	}
})

const sodlTravelThreat = mongoose.model('sodltravel', travelThreat)

module.exports = sodlTravelThreat;