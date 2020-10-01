import { determineTravelTime } from './determineTravelTime'

describe('Given total miles to travel and miles per hour', () => {
	describe('When number is divisble by 8 then', () => {
		test('Then returns the days', () => expect(determineTravelTime(3, 24)).toEqual("1 day"))
		test('Then returns a string', () => expect(typeof determineTravelTime(30)).toEqual('string'))
	})

	describe('When to miles are not divisible', () => {
		test('Then the days and hours', () => expect(determineTravelTime(3, 30)).toEqual("1 day, 2 hours"))
	})

	describe('When to miles are less than a day only returns hours', () => {
		test('Then the days and hours', () => expect(determineTravelTime(3, 3)).toEqual("1 hour"))
	})
})
