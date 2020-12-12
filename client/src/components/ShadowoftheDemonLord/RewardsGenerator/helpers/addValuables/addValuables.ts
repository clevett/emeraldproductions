import Valuable from '../../Classes/Valuable'
import Gemstones from '../../Classes/Gemstones'
import ArtObjects from '../../Classes/ArtObjects'
import Coins from '../../Classes/Coins'

interface coins {
  bit: number,
  copper: number,
  silver: number,
  gold: number
}

const addValuables = (level:string, coins:coins) => {
  const treasure = new Valuable(level)
  const rolls = treasure.rolls
  console.table(rolls)

  //Build a list of objects by price
  //For each demonination of coins d6 - 1 for X number of objects
  //Randomly pick X number of objects out of an array of objects for that level
  //Subtract the value from the coins above IF value - total does not reduce the coins to less than 0


  //let total = treasure.limit
  //let loop = tru
  //let loopNumber = 0
  
  // do {
  //   const loot = processRoll(level)
  //   if (loot.total > 0) {
  //     loot.coins.forEach(({name, value}) => {
  //       const convertedToGold = value / treasure.goldDivisor(name)
  //       const difference = total - convertedToGold
    
  //       if (difference > 0) {
  //         treasure.addAllCoins({[`${name}`]: value})
  //         total -= convertedToGold
  //       }
  //     })

  //     //Break out of the loop if rolls can't subtract any more
  //     loopNumber > 50 ? loop = false : loopNumber++
  //   } else {
  //     loop = false
  //   }
  // }
  // while (loop)

  return {}
}

export default addValuables
