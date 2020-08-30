import { cumulateMultiplier } from './calculateMultiplier'

describe('When cumulateMultiplier is a number, a number, and a status of true', () => {
	const result = cumulateMultiplier(1, 1.5, true)
	test('Then returns the multipler', () => expect(result).toEqual(2.5))
	test('Then returns a number', () => expect(typeof result).toEqual('number'))
})

describe('When cumulateMultiplier is a number, a number, and a status of false', () => {
	const result = cumulateMultiplier(4, 4, false)
	test('Then returns the multipler', () => expect(result).toEqual(0))
	test('Then returns a number', () => expect(typeof result).toEqual('number'))
})