import processRolls from './processRoll'

describe('Given processRolls is called', () => {
  describe('when passed the total and roll forumlas', () => {
    const rollFormulas = [
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

    it('then returns an object with coin values', () => {
      const result = processRolls(rollFormulas)

      expect(result).toHaveProperty('coins')
      expect(result).toHaveProperty('total')
    })
  })
})