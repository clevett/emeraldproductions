import { calculateDays } from './determineTravelTime'

describe('Given total hours', () => {
	describe('When a number is passed', () => {
		test('Then returns the days truncated', () => expect(calculateDays(10)).toEqual(1))
		test('Then returns a number', () => expect(typeof calculateDays(30)).toEqual('number'))
	})
})
