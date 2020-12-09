import Roll from 'roll'
import createListOfCoinsWith from './createListOfCoinsWith/createListOfCoinsWith'

interface coins {bit:number, copper: number, silver: number, gold: number}
interface rolls {bit: null|string, cp: null|string, ss: null|string, gc:null|string} 

const diceRoll = (dice:string) => new Roll().roll(dice).result

const buildResultString = (bitsTotal: number, rolls:rolls) => {
  let treasure:coins = {bit: 1, copper: 1, silver: 10, gold: 0}
  let total = bitsTotal

  console.log(rolls)

  const bits = rolls.bit ? diceRoll(rolls.bit) : 0
  const copper = rolls.cp ? diceRoll(rolls.cp) : 0
  const silver = rolls.ss ? diceRoll(rolls.ss) : 0
  const gold = rolls.gc ? diceRoll(rolls.gc) : 0

  console.log(bits)
  console.log(copper)
  console.log(silver)
  console.log(gold)

  let string = createListOfCoinsWith(treasure)
  return string
}

export default buildResultString