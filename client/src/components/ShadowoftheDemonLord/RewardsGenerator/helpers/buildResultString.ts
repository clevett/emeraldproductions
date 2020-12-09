import createListOfCoinsWith from './createListOfCoinsWith/createListOfCoinsWith'
import Coins from '../Classes/Coins'
import processRoll from './processRoll/processRoll'

interface rolls {bit: null|string, cp: null|string, ss: null|string, gc:null|string} 

const buildResultString = (goldTotal: number, rollFormulas:rolls) => {
  let treasure = new Coins(goldTotal)
  let total = treasure.total

  while (total > 1) {
    const coinRoll = processRoll(total, rollFormulas)
    treasure.addAllCoins(coinRoll)
    total -= coinRoll.total
  }

  const rewards = treasure.getAllCoins()
  const rewardsTotal = rewards.bit / 1000 + rewards.copper / 100 + rewards.silver / 10 + rewards.gold
  //console.table({levelTotal: goldTotal, ...rewards, rewardsTotal})


  let string = createListOfCoinsWith(treasure.getAllCoins())
  return string
}

export default buildResultString