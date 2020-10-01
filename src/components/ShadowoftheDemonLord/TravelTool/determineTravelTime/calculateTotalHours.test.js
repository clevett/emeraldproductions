import { calculateTotalHours } from './determineTravelTime'

describe('Given miles per hour and total miles to tavel', () => {
	describe('When numbers are easily divisible', () => {
		test('Then returns miles total hours needed to travel distance', () => expect(calculateTotalHours(30, 3)).toEqual(10))
		test('Then returns a number', () => expect(typeof calculateTotalHours(30)).toEqual('number'))
	})

	describe('When numbers are not easily divisible', () => {
		test('Then returns a rounded up number', () => expect(calculateTotalHours(25, 3)).toEqual(9))
	})
})
