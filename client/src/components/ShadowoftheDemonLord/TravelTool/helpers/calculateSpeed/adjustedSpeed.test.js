import { adjustedSpeed } from './calculateSpeed'

describe('When a Mile per Hours is passed', () => {
	test('Then returns the calculated speed', () => expect(adjustedSpeed(4, 2)).toEqual(2))
	test('Then returns a number', () => expect(typeof adjustedSpeed(4, 1.5)).toEqual('number'))
})
