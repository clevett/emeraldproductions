import { calculatePace } from './calculateSpeed'

describe('When a Mile per Hours is passed', () => {
	test('Then returns the calculated speed', () => expect(calculatePace(4)).toEqual(4))
	test('Then returns a number', () => expect(typeof calculatePace(4)).toEqual('number'))
})
