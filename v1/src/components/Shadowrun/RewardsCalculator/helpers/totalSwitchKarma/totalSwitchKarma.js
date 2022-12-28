const totalSwitchKarma = ({ startingKarma, status, karmaToAdd }) => {
	const karmaTotal = status ? startingKarma + karmaToAdd : startingKarma - karmaToAdd
	return karmaTotal
}

export default totalSwitchKarma