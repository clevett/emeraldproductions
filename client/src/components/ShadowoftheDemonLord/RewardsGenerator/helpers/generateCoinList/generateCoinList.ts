import processRoll from '../processRoll/processRoll'
import Coins from '../../Classes/Coins'

interface coins { bit: number, copper: number, silver: number, gold:number } 

const generateCoinList = (level:string):coins => {
  const treasure = new Coins(level)
  let total = treasure.limit
  let loop = true
  let loopNumber = 0

  do {
    const loot = processRoll(level)
    if (loot.total > 0) {
      loot.coins.forEach(({name, value}) => {
        const convertedToGold = value / treasure.goldDivisor(name)
        const difference = total - convertedToGold
    
        if (difference > 0) {
          treasure.addAllCoins({[`${name}`]: value})
          total -= convertedToGold
        }
      })

      //Break out of the loop if rolls can't subtract any more
      loopNumber > 50 ? loop = false : loopNumber++
    } else {
      loop = false
    }
  }
  while (loop);

  const goldRoundedDown = Math.floor(total)
  const gold = goldRoundedDown > 0 ? goldRoundedDown : 0

  const remainder = treasure.getRemainder(total)
  const remainingCoins = remainder ? treasure.convertToCoins(remainder) : {}

  treasure.addAllCoins({...remainingCoins, gold})

  return treasure.getAllCoins()
}

export default generateCoinList
