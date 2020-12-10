import createListOfCoinsWith from './createListOfCoinsWith/createListOfCoinsWith'
import generateCoinList from '../helpers/generateCoinList/generateCoinList'

interface rolls {bit: null|string, cp: null|string, ss: null|string, gc:null|string} 

const buildResultString = (goldTotal: number, rollFormulas:rolls) => {
  const rewards = generateCoinList(goldTotal, rollFormulas)
  return createListOfCoinsWith(rewards)
}

export default buildResultString