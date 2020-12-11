import getRolls from '../getRolls/getRolls'
import Coins from '../../Classes/Coins'

interface rolls {name:string, roll:string}[]

const processRoll = (rollFormulas:rolls) => {
  const results = getRolls(rollFormulas)
  const coins = new Coins()
  const rolls = coins.handleRoll(results)

  return rolls
}

export default processRoll
