import divideDicepool from '../divideRoundDown/divideRoundDown'

const calculatorNuyenMultiplier = (dicepool, situational) => Math.max(1, situational + divideDicepool(dicepool, 4))

export default calculatorNuyenMultiplier