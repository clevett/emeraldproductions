const divideDicepool = dicepool => Math.floor(dicepool/4)

const multiplyBy3000 = multiplier => multiplier ? 3000 * multiplier : 3000

const calculatorMultiplier = (dicepool, situational) => Math.max(1, situational + divideDicepool(dicepool))

const determinePercent = (type, percent) => type === 'standard' ? 0 : type === 'good feels' ? -Math.abs(percent) : percent

const calculateNuyen = state => {
	const multiplier = calculatorMultiplier(state.dicepool, state.cashSituationModifier)
	const percent = determinePercent(state.type, state.cashModifierPercent)
	const subtotal = multiplyBy3000(multiplier)
	return subtotal + (percent * subtotal)
}

export { calculateNuyen, divideDicepool, multiplyBy3000, calculatorMultiplier, determinePercent }
