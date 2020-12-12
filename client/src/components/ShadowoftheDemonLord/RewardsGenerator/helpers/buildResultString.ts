import createListOfCoinsWith from './createListOfCoinsWith/createListOfCoinsWith'
import generateCoinList from '../helpers/generateCoinList/generateCoinList'
import addValuables from '../helpers/addValuables/addValuables'

const buildResultString = (level:string) => {
  const rewards = generateCoinList(level)
  const valuables = addValuables(level, rewards)

  const rewardsTotal = rewards.bit / 1000 + rewards.copper / 100 + rewards.silver / 10 + rewards.gold
  console.table({...rewards, rewardsTotal, ...valuables})


  return createListOfCoinsWith(rewards)
}

export default buildResultString