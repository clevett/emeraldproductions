import multiplyByBaseRate from '../multiplyByBaseRate/multiplyByBaseRate'
import calculateNuyenMultiplier from '../calculateNuyenMultiplier/calculateNuyenMultiplier'
import determineNuyenPercentBonus from '../determineNuyenPercentBonus/determineNuyenPercentBonus'

const calculateNuyen = state => {
	const multiplier = calculateNuyenMultiplier(state.dicepool, state.nuyenSituationModifier)
	const subtotal = multiplyByBaseRate(multiplier, state.nuyenBaseRate)
	const percent = determineNuyenPercentBonus(state.type, state.nuyenModifierPercent)
	return subtotal + (percent * subtotal)
}

export default calculateNuyen
