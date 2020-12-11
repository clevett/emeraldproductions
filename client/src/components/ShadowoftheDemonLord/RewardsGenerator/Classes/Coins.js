import Treasure from './Treasure'
class Coins extends Treasure {
  constructor(name) {
    super(name)
    this.bits = 0
    this.cp = 0
    this.ss = 0
    this.gc = 0
    this.lootGoldTotal = 0
    this.rollForumlas = this.determineCoins(name)
  }

  get bit() { return this.bits }
  get copper() { return this.cp }
  get silver() { return this.ss }
  get gold() { return this.gc }
  get total() { return this.lootGoldTotal }
  get rolls() { return this.rollForumlas }

  set bit(value) { return this.bits = value }
  set copper(value) { return this.cp = value }
  set silver(value) { return this.ss = value }
  set gold(value) { return this.gc = value }
  set total(value) { return this.lootGoldTotal = value }

  addAllCoins = (coins) => {
    this.bit += coins.bit || 0
    this.copper += coins.copper || 0
    this.silver += coins.silver || 0
    this.gold += coins.gold || 0
  }

  convertToCoins(remainder) {
    let coinage = remainder

    const silver = Math.floor(coinage * 10)
    coinage -= silver / 10

    const copper = Math.floor(coinage * 100)
    coinage -= copper / 100

    const bit = Math.ceil(coinage * 1000)
    
    return { bit, copper, silver }
  }

  denomination = (divisor, result) => result / divisor

  checkSumvsLimit = sum => sum < this.limit ? true : false

  getAllCoins = () => {
    return {
      bit: this.bits,
      copper: this.cp,
      silver: this.ss,
      gold: this.gc
    }
  }

  getArrayCoins = () => {
    let array = []
    const coins = this.getAllCoins()

    for(const [denomination, value] of Object.entries(coins)) {
      if (value > 0) {
        array.push({name: denomination, value})
      }
    }

    return array
  }

  getRemainder = number => number % 1

  goldDivisor = (name) => {
    switch(name) {
      case 'bit':
        return 1000
      case 'cp':
      case 'copper':
        return 100
      case 'ss':
      case 'silver':
        return 10
      default:
        return 1
    }
  }

  handleRoll = (results) => {
    let sum = 0

    results.forEach(({name, result}) => {
      const divisor = this.goldDivisor(name)
      sum += result / divisor
      this.setCoins(name, result)
    })

    this.sum = sum

    return {coins: this.getArrayCoins(), total: this.sum }
  }

  setCoins = (name, value) => {
    switch(name) {
      case 'bit':
        this.bits = value
        break
      case 'cp':
      case 'copper':
        this.cp = value
        break
      case 'ss':
      case 'silver':
        this.ss = value
        break
      default:
        this.gc = value
    }
  }

  determineCoins = (name) => {
    switch(name) {
      case 'starting':
        return [
          {
            name: 'bit',
            roll: '3d6'
          },
          {
            name: 'copper',
            roll: '6d6'
          },
          {
            name: 'silver',
            roll: '2d6'
          }
        ]
      case 'novice':
        return [
          {
            name: 'bit',
            roll: '2d6'
          },
          {
            name: 'copper',
            roll: '2d6'
          },
          {
            name: 'silver',
            roll: '6d6'
          },
          {
            name: 'gold',
            roll: '3d6'
          }
        ]
      case 'expert':
        return [
          {
            name: 'silver',
            roll: '8d6'
          },
          {
            name: 'gold',
            roll: '5d6'
          }
        ]
      case 'master':
        return [
          {
            name: 'silver',
            roll: '12d6'
          },
          {
            name: 'gold',
            roll: '8d6'
          }
        ]
      default:
        return []
    }
  }
}

export default Coins