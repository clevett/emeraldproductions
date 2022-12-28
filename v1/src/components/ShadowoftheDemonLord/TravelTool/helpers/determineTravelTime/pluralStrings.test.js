import { pluralString } from './determineTravelTime'

describe('Given give a number and a type', () => {
	describe('When number is 1', () => {
		test('Then returns return a singular string', () => expect(pluralString('day', 1)).toEqual('1 day'))
		test('Then returns a string', () => expect(typeof pluralString('day', 1)).toEqual('string'))
	})

	describe('When number is greater than 1', () => {
		test('Then returns return a string with s', () => expect(pluralString('day', 2)).toEqual('2 days'))
	})
})
