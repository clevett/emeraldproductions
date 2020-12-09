import Coins from './Coins'

describe('Given a new Coins is created', () => {
  let coins = new Coins(5)

  afterEach(() => coins = new Coins(5))
  //const rollFormulas = {bit: '2d6', cp: '2d6', ss: '6d6', gc: '3d6'}

  describe('when getAllCoins is called', () => {
    it('then returns an object with all the coin demonmiations', () => {
      const result = coins.getAllCoins()
      expect(result).toHaveProperty('bit')
      expect(result).toHaveProperty('copper')
      expect(result).toHaveProperty('silver')
      expect(result).toHaveProperty('gold')
    })
  })

  describe('when goldDivisor is called', () => {
    describe('with a false case', () => {
      it('then returns a default of 1', () => {
        const result = coins.goldDivisor('')
        expect(result).toEqual(1)
      })
    })

    describe('with a a case of bit', () => {
      it('then returns a 1000', () => {
        expect(coins.goldDivisor('bit')).toEqual(1000)
      })
    })

    describe('with a a case of cp || coppper', () => {
      it('then returns a 100', () => {
        expect(coins.goldDivisor('cp')).toEqual(100)
        expect(coins.goldDivisor('copper')).toEqual(100)
      })
    })

    describe('with a a case of ss || silver', () => {
      it('then returns a 10', () => {
        expect(coins.goldDivisor('ss')).toEqual(10)
        expect(coins.goldDivisor('silver')).toEqual(10)
      })
    })
  })

  describe('when demonitation is called with a name and result', () => {
    it('then returns the gold demonination', () => {
      expect(coins.denomination(1000, 15)).toEqual(0.015)
    })
  })

  describe('when convertToCoins is called with a value of < 1', () => {
    const result = coins.convertToCoins(0.1267)
    it('then returns an object with tenths converted to silver', () => {
      expect(result.silver).toBe(1)
    })

    it('then returns an object with hundredth converted to copper', () => {
      expect(result.copper).toBe(2)
    })

    it('then returns an object with thousandth converted to bits rounded up', () => {
      expect(result.bit).toBe(7)
    })
  })

  describe('when addAllCoins is called with a coins object', () => {
    it('then adds the values to the class coins', () => {
      coins.addAllCoins({silver: 1, copper: 12, bit: 2, gold: 14})
      expect(coins.silver).toEqual(1)
      expect(coins.copper).toEqual(12)
      expect(coins.bit).toEqual(2)
      expect(coins.gold).toEqual(14)
    })

    it('then add a 0 if a key is undefined', () => {
      coins.addAllCoins({silver: 1, copper: 12, bit: 2})
      expect(coins.gold).toEqual(0)
    })
  })

  describe('when checkSumvsLimit is called with a sum', () => {
    it('then returns true if the sum is less than the limit', () => {
      expect(coins.checkSumvsLimit(1)).toBeTruthy()
    })

    it('then returns false if the sum is greater than the limit', () => {
      expect(coins.checkSumvsLimit(1000)).toBeFalsy()
    })
  })
})