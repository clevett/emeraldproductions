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

  describe('when goldRemainder is called with a number', () => {
    it('then returns the decimal if the number hase one', () => {
      expect(coins.getRemainder(1.5)).toEqual(0.5)
    })

    it('then returns 0 if the number does not have a decimanl', () => {
      expect(coins.getRemainder(51)).toEqual(0)
    })
  })

  describe('when setCoins is called', () => {
    describe('with a name of bit and a value', () => {
      it('then sets bit to the value', () => {
        coins.setCoins('bit', 5)
        expect(coins.bit).toEqual(5)
      })
    })

    describe('with a name of cp || copper and a value', () => {
      it('then sets copper to the value', () => {
        coins.setCoins('cp', 12)
        expect(coins.copper).toEqual(12)
        coins.setCoins('copper', 15)
        expect(coins.copper).toEqual(15)
      })
    })

    describe('with a name of cp || copper and a value', () => {
      it('then sets copper to the value', () => {
        coins.setCoins('ss', 12)
        expect(coins.silver).toEqual(12)
        coins.setCoins('silver', 15)
        expect(coins.silver).toEqual(15)
      })
    })

    describe('with a name that does not match a case', () => {
      it('then sets the gold value', () => {
        coins.setCoins('gold', 15)
        expect(coins.gold).toEqual(15)
      })
    })
  })

  describe('when handleRoll is called with rolls', () => {
    const samples = [ { name: 'bit', result: 11 }, { name: 'cp', result: 10 }, { name: 'ss', result: 22 }, { name: 'gc', result: 9 } ]
    const result = coins.handleRoll(samples)

    it('then returns the total of convertedGold', () => {
      expect(result).toHaveProperty('total')
      expect(result.total).toEqual(11.311)
    })

    it('then sets the coin values', () => {
      expect(result).toHaveProperty('coins')
      expect(Array.isArray(result.coins)).toEqual(true)
    })
  })

  describe('when getArrayCoins is called', () => {
    coins.setCoins('copper', 5)
    coins.setCoins('gold', 0)
    const result = coins.getArrayCoins()

    it('then returns an array', () => {
      expect(Array.isArray(result)).toEqual(true)
    })

    it('then returns an array with the coin if value is not 0', () => {
      expect(result).toContainEqual({name:'copper', value:5})
      expect(result).not.toHaveProperty('gold')
    })
  })
})