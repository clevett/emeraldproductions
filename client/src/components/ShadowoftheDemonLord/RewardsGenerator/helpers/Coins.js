class Coins {
  constructor(total, results) {
    this._total = total
    this._results = results
    this.bits = 0
    this.cp = 0
    this.ss = 0
    this.gc = 0
    this.sum = this.handleRoll(results)
  }

  get bit() { return this.bit }
  get copper() { return this.cp }
  get silver() { return this.ss }
  get gold() { return this.gc }
  get total() { return this._total }

  getAllCoins = () => {
    return {
      bit: this.bits,
      copper: this.cp,
      silver: this.ss,
      gold: this.gc,
      total: this.sum
    }
  }

  determineDivisor = (name) => {
    switch(name) {
      case 'bit':
        return 1000
      case 'cp':
        return 100
      case 'ss':
        return 10
      default:
        return 1
    }
  }

  denomination = (name, result) => {
    return result / this.determineDivisor(name)
  }

  checkTotalvsSum = (sum, gold) => {
    return ((sum + gold) < this.total) ? true : false
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

  handleRoll = (results) => {
    let sum = 0

    results.forEach(({name, result}) => {
      const convertedGold = this.denomination(name, result)
      if (this.checkTotalvsSum(sum, convertedGold)) {
        sum += convertedGold
        this.setCoins(name, result)
      }
    })

    return sum
  }
}

export default Coins