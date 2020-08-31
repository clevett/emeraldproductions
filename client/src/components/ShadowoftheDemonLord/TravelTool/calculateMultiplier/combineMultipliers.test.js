import { combineMultipliers } from './calculateMultiplier'

describe('When values are over 1', () => {
	const result = combineMultipliers(2, 2)
	test('Then returns the accumulated multipler', () => expect(result).toEqual(4))
	test('Then returns a number', () => expect(typeof result).toEqual('number'))
})

describe('When values are 1', () => {
	const result = combineMultipliers(1, 1)
	test('Then returns the 1', () => expect(result).toEqual(1))
})

describe('When values are 1', () => {
	const result = combineMultipliers(1, 3)
	test('Then returns the value over 1', () => expect(result).toEqual(3))
})

describe('When values are 0', () => {
	const result = combineMultipliers(0, 0)
	test('Then returns the value over 1', () => expect(result).toEqual(1))
})