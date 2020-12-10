import processRoll from '../processRoll/processRoll'
import Coins from '../../Classes/Coins'

interface rolls {bit: null|string, cp: null|string, ss: null|string, gc:null|string} 

const generateCoinList = (limit:number, rollFormulas:rolls) => {
  const treasure = new Coins(limit)
  let total = limit
  let loop = true


  do {
    const coins = processRoll(rollFormulas)
    const difference = total - coins.total
    
    console.log(rollFormulas)
    console.log(total)

    if (difference > 0 && coins.total > 0) {
      treasure.addAllCoins(coins)
      total -= coins.total
      console.log(`Repeat the loop`)
    } else {
      let remaingCoins = {bit: 0, copper: 0, silver: 0, gold: 0}

      const gold = Math.floor(total)
      remaingCoins.gold = gold > 0 ? gold : 0

      const remainder = treasure.getRemainder(total)
      const remainingCoins = remainder ? treasure.convertToCoins(remainder) : {}

      treasure.addAllCoins({...remainingCoins, gold})

      loop = false
    }
  }
  while (loop);

  return treasure.getAllCoins()
}

export default generateCoinList
