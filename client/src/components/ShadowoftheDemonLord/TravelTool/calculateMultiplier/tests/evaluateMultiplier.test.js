import { evaluateMultiplier } from '../calculateMultiplier'

describe('When evaluateMultiplier is given a number of 1', () => {
	const result = evaluateMultiplier(1)
	test('Then returns a zero', () => expect(result).toEqual(0))
	test('Then returns a number', () => expect(typeof result).toEqual('number'))
})

describe('When evaluateMultiplier is given a number greater than 1', () => {
	const result = evaluateMultiplier(4)
	test('Then returns the multipler', () => expect(result).toEqual(4))
	test('Then returns a number', () => expect(typeof result).toEqual('number'))
})