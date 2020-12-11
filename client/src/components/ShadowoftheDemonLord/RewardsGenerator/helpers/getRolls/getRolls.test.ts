import { isArray } from 'util'
import getRolls from './getRolls'

describe('Given getRolls is callsed', () => {
  describe('when passed a list of rolls', () => {
    it('then returns an array of results', () => {
      const example = [{name:'silver', roll:'1d6'}, {name:'gold', roll:'1d6'}]
      const results = getRolls(example)
      expect(Array.isArray(results)).toBeTruthy()
      expect(results[0].name).toEqual('silver')
    })
  })
})

