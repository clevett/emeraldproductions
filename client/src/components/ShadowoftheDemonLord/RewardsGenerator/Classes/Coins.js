class Coins {
  constructor(total) {
    this.goldLimitPerLevel = total
    this.bits = 0
    this.cp = 0
    this.ss = 0
    this.gc = 0
    this.goldTotal = 0
  }

  get bit() { return this.bits }
  get copper() { return this.cp }
  get silver() { return this.ss }
  get gold() { return this.gc }
  get limit() { return this.goldLimitPerLevel }
  get total() { return this.goldTotal }

  set bit(value) { return this.bits = value }
  set copper(value) { return this.cp = value }
  set silver(value) { return this.ss = value }
  set gold(value) { return this.gc = value }
  set total(value) { return this.goldTotal = value }

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
      const convertedGold = this.denomination(divisor, result)
      if (this.checkSumvsLimit(sum + convertedGold)) {
        sum += convertedGold
        this.setCoins(name, result)
      }
    })

    const remainder = this.getRemainder(sum)
    if(remainder) {
      const remainingCoins = this.convertToCoins(remainder)
      this.addAllCoins(remainingCoins)
    }

    return this.sum = Math.round(sum)
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

}

export default Coins