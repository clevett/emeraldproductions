import createListOfCoinsWith from './createListOfCoinsWith/createListOfCoinsWith'
import generateCoinList from '../helpers/generateCoinList/generateCoinList'

const buildResultString = (level:string) => {
  const rewards = generateCoinList(level)

  const rewardsTotal = rewards.bit / 1000 + rewards.copper / 100 + rewards.silver / 10 + rewards.gold
  //console.table({limit: goldTotal, ...rewards, rewardsTotal})

  return createListOfCoinsWith(rewards)
}

export default buildResultString