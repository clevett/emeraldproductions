import Roll from 'roll'

const determineBoonBaneModifier = dieTotal => {
	const d6sRolled = dieTotal !== 0 ? new Roll().roll(`${Math.abs(dieTotal)}d6`).rolled : false
	return d6sRolled ? Math.max(...d6sRolled) : 0
}

export default determineBoonBaneModifier