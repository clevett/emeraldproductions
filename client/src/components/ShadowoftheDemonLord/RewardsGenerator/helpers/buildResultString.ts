import createListOfCoinsWith from './createListOfCoinsWith/createListOfCoinsWith'
import generateCoinList from '../helpers/generateCoinList/generateCoinList'

interface rolls {bit: null|string, cp: null|string, ss: null|string, gc:null|string} 

const buildResultString = (goldTotal: number, rollFormulas:rolls) => {
  const rewards = generateCoinList(goldTotal, rollFormulas)
  const rewardsTotal = rewards.bit / 1000 + rewards.copper / 100 + rewards.silver / 10 + rewards.gold
  console.table({limit: goldTotal, ...rewards, rewardsTotal})

  let string = createListOfCoinsWith(rewards)
  return string
}

export default buildResultString