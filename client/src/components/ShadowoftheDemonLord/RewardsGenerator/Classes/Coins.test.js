import Coins from './Coins'

describe('Given a new Coins is created', () => {
  const coins = new Coins(5)
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
})