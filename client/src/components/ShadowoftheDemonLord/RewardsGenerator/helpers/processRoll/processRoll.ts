import getRolls from '../getRolls/getRolls'
import Coins from '../../Classes/Coins'

interface rolls {bit: null|string, cp: null|string, ss: null|string, gc:null|string} 

const processRoll = (total:number, rollFormulas:rolls) => {
  const results = getRolls(rollFormulas)
  const coins = new Coins(total)
  const rolls = coins.handleRoll(results)

  console.table({...rolls, limit: total })

  return rolls
}

export default processRoll