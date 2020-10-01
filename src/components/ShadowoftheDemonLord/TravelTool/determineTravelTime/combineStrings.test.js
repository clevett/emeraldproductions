import { combineStrings } from './determineTravelTime'

describe('Given two parameters are passed', () => {
	describe('When days and hours are passed', () => {
		const result = combineStrings('1 day', '2 hours')
		test('Then two strings combined with a space and ,', () => expect(result).toEqual('1 day, 2 hours'))
		test('Then returns a string', () => expect(typeof result).toEqual('string'))
	})

	describe('When hours are false', () => {
		test('return only days', () => expect(combineStrings('2 days', false)).toEqual('2 days'))
	})

	describe('When days are false', () => {
		test('return only hours', () => expect(combineStrings(false, '2 hours')).toEqual('2 hours'))
	})
})
