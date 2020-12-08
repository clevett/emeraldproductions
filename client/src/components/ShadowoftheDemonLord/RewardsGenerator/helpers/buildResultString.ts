//import Roll from 'roll'

interface coins {bits:number, copper: number, silver: number, gold: number}

const createListOfCoinsWith = (treasure: coins) => {
  let string = ''

  for (const [key, value] of Object.entries(treasure) ) {
    const longName = '' //getProperCoinName(key)
    const name = value > 1 ? `${longName}s` : longName
    string += value ? `${value} ${name}, ` : ''
  }

  return string
}

const buildResultString = (bitsTotal: number, coinRolls: {}) => {
  let treasure:coins = {bits: 1, copper: 2, silver: 0, gold: 0}
  let total = bitsTotal
  let string = createListOfCoinsWith(treasure)
  return string
}

export default buildResultString