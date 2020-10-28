import divideDicepool from '../divideRoundDown/divideRoundDown'

const calculatorNuyenMultiplier = (dicepool, situational) => divideDicepool(dicepool, 4) + situational

export default calculatorNuyenMultiplier