import determineBoonBaneModifier from './determineBoonBaneModifier'

describe('Given a die total', () => {
	describe('When parameter is greater than 0', () => {
		const result = determineBoonBaneModifier(3)
		test('Then returns a random die result', () => expect(result).not.toEqual(0))
		test('Then returns a number', () => expect(typeof result).toEqual('number'))
	})

	describe('When parameter is less than 0', () => {
		const result = determineBoonBaneModifier(-130)
		test('Then returns a random die result', () => expect(result).not.toEqual(0))
		test('Then returns a result greater than 0', () => expect(result).toBeGreaterThan(0))
		test('Then returns a result less than 6', () => expect(result).toBeLessThanOrEqual(6))
	})

	describe('When the total is 0', () => {
		const result = determineBoonBaneModifier(0)
		test('Then returns 0', () => expect(result).toEqual(0))
	})
})
