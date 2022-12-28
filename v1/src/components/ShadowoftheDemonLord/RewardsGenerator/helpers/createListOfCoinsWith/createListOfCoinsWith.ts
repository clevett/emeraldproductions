import getProperCoinName from '../getProperCoinName/getProperCoinName'

interface coins {bit:number, copper: number, silver: number, gold: number}

const createListOfCoinsWith = (treasure: coins) => {
  let string = ''

  for (const [key, value] of Object.entries(treasure) ) {
    const longName = getProperCoinName(key)
    const name = value > 1 ? `${longName}s` : longName
    string += value ? ` ${value} ${name},` : ''
  }

  return string.slice(0, -1)
}

export default createListOfCoinsWith