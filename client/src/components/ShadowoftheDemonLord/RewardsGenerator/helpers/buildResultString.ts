import createListOfCoinsWith from './createListOfCoinsWith/createListOfCoinsWith'
import getRolls from './getRolls/getRolls'
import Coins from './Coins'

interface coins {bit:number, copper: number, silver: number, gold: number}
interface rolls {bit: null|string, cp: null|string, ss: null|string, gc:null|string} 

const buildResultString = (goldTotal: number, rollFormulas:rolls) => {
  let treasure:coins = {bit: 1, copper: 1, silver: 10, gold: 0}
  let total = goldTotal

  const processRoll = () => {
    const results = getRolls(rollFormulas)
    const coins = new Coins(total, results).getAllCoins()
    return coins
  }

  console.log(processRoll())

  const rollTotal = 0

  console.table({
    rollTotal,
    total
  })

  let string = createListOfCoinsWith(treasure)
  return string
}

export default buildResultString