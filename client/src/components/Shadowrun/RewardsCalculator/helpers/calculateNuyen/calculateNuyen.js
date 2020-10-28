import multiplyBy3000 from '../multiplyBy3000/multiplyBy3000'
import calculateNuyenMultiplier from '../calculateNuyenMultiplier/calculateNuyenMultiplier'
import determineNuyenPercentBonus from '../determineNuyenPercentBonus/determineNuyenPercentBonus'

const calculateNuyen = state => {
	const multiplier = calculateNuyenMultiplier(state.dicepool, state.cashSituationModifier)
	const percent = determineNuyenPercentBonus(state.type, state.cashModifierPercent)
	const subtotal = multiplyBy3000(multiplier)
	return subtotal + (percent * subtotal)
}

export default calculateNuyen
