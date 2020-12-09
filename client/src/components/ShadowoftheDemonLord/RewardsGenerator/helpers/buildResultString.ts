import Roll from 'roll'
import createListOfCoinsWith from './createListOfCoinsWith/createListOfCoinsWith'

interface coins {bit:number, copper: number, silver: number, gold: number}
interface rolls {bit: null|string, cp: null|string, ss: null|string, gc:null|string} 

const diceRoll = (dice:string) => new Roll().roll(dice).result

const buildResultString = (goldTotal: number, rolls:rolls) => {
  let treasure:coins = {bit: 1, copper: 1, silver: 10, gold: 0}
  let total = goldTotal

  const getRolls = () => {
    const bits = rolls.bit ? diceRoll(rolls.bit) : 0
    const copper = rolls.cp ? diceRoll(rolls.cp) : 0
    const silver = rolls.ss ? diceRoll(rolls.ss) : 0
    const gold = rolls.gc ? diceRoll(rolls.gc) : 0
    return {bits, copper, silver, gold}
  }

  const processRoll = () => {
    const array = getRolls()
    let sum = 0

    for (const [key, value] of Object.entries(array) ) {
      const divisor = key === 'bit' ? 1000 : key === 'copper' ? 100 : key === 'silver' ? 10 : 1
      const chunkgold = value / divisor

      if ((total - chunkgold) > 0) {
        sum += chunkgold
        //treasure[key] += value
      } else {
        return sum
      }
    }

    //const decimal: number | boolean = sum % 1

    return sum

    console.log(array)
  }

  const rollTotal = processRoll()

  console.table({
    rollTotal,
    total
  })

  let string = createListOfCoinsWith(treasure)
  return string
}

export default buildResultString