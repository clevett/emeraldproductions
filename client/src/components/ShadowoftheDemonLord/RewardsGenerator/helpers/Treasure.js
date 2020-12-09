class Treasure {
  constructor(name){
    this.groupLevel = name
    this.totalGold = this.determineTotalGold()
    this.coinRolls = this.determineCoins()
    this.totalBits = this.getTotalBits()
  }

  get name() { return this.groupLevel }
  get gold() { return this.totalGold }
  get coins() { return this.coinRolls }
  get bits() { return this.totalBits }

  determineTotalGold = () => {
    switch(this.name) {
      case 'starting':
        return 1
      case 'novice':
        return 5
      case 'expert':
        return 50
      case 'master':
        return 500
      default:
        return 0
    }
  }

  determineCoins = () => {
    switch(this.name) {
      case 'starting':
        return {
          bit: '6d6',
          cp: '3d6',
          ss: '2d6',
          gc: null
        }
      case 'novice':
        return {
          bit: '2d6',
          cp: '2d6',
          ss: '6d6',
          gc: '3d6'
        }
      case 'expert':
        return {
          bit: null,
          cp: null,
          ss: '4d6',
          gc: '5d6'
        }
      case 'master':
        return {
          bit: null,
          cp: null,
          ss: '12d6',
          gc: '8d6'
        }
      default:
        return {
          bit: null,
          cp: null,
          ss: null,
          gc: null
        }
    }
  }

  getTotalBits = () => this.gold * 1000
}

export default Treasure
