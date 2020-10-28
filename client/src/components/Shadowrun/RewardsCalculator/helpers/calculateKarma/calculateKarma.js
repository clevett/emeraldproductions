import divideDicepool from '../divideRoundDown/divideRoundDown'

const calculateKarma = (karmaFromRun, karmaModifier, dicepool) => karmaFromRun + karmaModifier + divideDicepool(dicepool, 6)

export default calculateKarma