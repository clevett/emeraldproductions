class Treasure {
  constructor(name){
    this.groupLevel = name
    this.goldLimit = this.determineGoldLimit()
  }

  get level() { return this.groupLevel }
  get limit() { return this.goldLimit }

  determineGoldLimit = () => {
    switch(this.level) {
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
}

export default Treasure
