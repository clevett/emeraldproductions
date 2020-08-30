import calculateMultiplier from './calculateMultiplier'

describe('When calculateMultiplier is a number, a number, and a status of true', () => {
	const result = calculateMultiplier(1, 1.5, true)
	test('Then returns the multipler', () => expect(result).toEqual(2.5))
	test('Then returns a number', () => expect(typeof result).toEqual('number'))
})

describe('When calculateMultiplier is a number, a number, and a status of false', () => {
	const result = calculateMultiplier(4, 4, false)
	test('Then returns the multipler', () => expect(result).toEqual(0))
	test('Then returns a number', () => expect(typeof result).toEqual('number'))
})