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
  get total() { return this.goldLimitPerLevel }
  get sum() { return this.goldTotal }

  set bit(value) { return this.bits = value }
  set copper(value) { return this.cp = value }
  set silver(value) { return this.ss = value }
  set gold(value) { return this.gc = value }
  set sum(value) { return this.goldTotal = value }

  addAllCoins = (coins) => {
    this.bit += coins.bit
    this.copper += coins.copper
    this.silver += coins.silver
    this.gold += coins.gold
  }

  addRemainder(remainder) {
    let coinage = remainder

    const silver = Math.floor(coinage * 10)
    coinage -= silver / 10

    const copper = Math.floor(coinage * 100)
    coinage -= copper / 100

    const bit = Math.ceil(coinage * 1000)
    
    this.addAllCoins({
      bit,
      copper,
      silver,
      gold: 0
    })
  }

  denomination = (divisor, result) => result / divisor

  checkTotalvsSum = (sum, gold) => {
    return ((sum + gold) < this.total) ? true : false
  }

  getAllCoins = () => {
    return {
      bit: this.bits,
      copper: this.cp,
      silver: this.ss,
      gold: this.gc
    }
  }

  getRemainder = (number) => number % 1

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
      if (this.checkTotalvsSum(sum, convertedGold)) {
        sum += convertedGold
        this.setCoins(name, result)
      }
    })

    const remainder = this.getRemainder(sum)
    if(remainder) {
      this.addRemainder(remainder)
    }

    return this.sum = Math.round(sum)
  }

  setCoins = (name, value) => {
    switch(name) {
      case 'bit':
        this.bits = value
        break
      case 'cp':
        this.cp = value
        break
      case 'ss':
        this.ss = value
        break
      default:
        this.gc = value
    }
  }

}

export default Coins