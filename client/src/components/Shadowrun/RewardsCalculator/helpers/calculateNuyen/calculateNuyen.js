import multiplyBy3000 from '../multiplyBy3000/multiplyBy3000'
import calculateNuyenMultiplier from '../calculateNuyenMultiplier/calculateNuyenMultiplier'
import determineNuyenPercentBonus from '../determineNuyenPercentBonus/determineNuyenPercentBonus'

const calculateNuyen = state => {
	const multiplier = calculateNuyenMultiplier(state.dicepool, state.cashSituationModifier)
	const subtotal = multiplyBy3000(multiplier)
	const percent = determineNuyenPercentBonus(state.type, state.cashModifierPercent)
	return subtotal + (percent * subtotal)
}

export default calculateNuyen
