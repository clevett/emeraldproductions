import getRolls from '../getRolls/getRolls'
import Coins from '../../Classes/Coins'

interface rolls {bit: null|string, cp: null|string, ss: null|string, gc:null|string} 

const processRoll = (total:number, rollFormulas:rolls) => {
  const results = getRolls(rollFormulas)
  const coins = new Coins(total)
  coins.handleRoll(results)

  return {...coins.getAllCoins(), total: coins.sum }
}

export default processRoll