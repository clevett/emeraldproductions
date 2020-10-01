const calculateRollResult = (totalDice, d20Roll, d6Roll) => {
	return totalDice > 0 ? d20Roll + d6Roll : totalDice < 0 ? d20Roll - d6Roll : d20Roll
}

export default calculateRollResult