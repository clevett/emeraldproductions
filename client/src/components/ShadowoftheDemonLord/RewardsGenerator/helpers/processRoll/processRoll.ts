import getRolls from '../getRolls/getRolls'
import Coins from '../../Classes/Coins'

const processRoll = (level:string) => {
  const coins = new Coins(level)
  const results = getRolls(coins.rolls)
  const rolls = coins.handleRoll(results)
  return rolls
}

export default processRoll
