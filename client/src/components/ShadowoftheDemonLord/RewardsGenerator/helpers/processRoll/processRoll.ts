import getRolls from '../getRolls/getRolls'
import Coins from '../../Classes/Coins'

interface rolls {bit: null|string, cp: null|string, ss: null|string, gc:null|string} 

const processRoll = (rollFormulas:rolls) => {
  const results = getRolls(rollFormulas)
  const coins = new Coins()
  const rolls = coins.handleRoll(results)

  return rolls
}

export default processRoll
