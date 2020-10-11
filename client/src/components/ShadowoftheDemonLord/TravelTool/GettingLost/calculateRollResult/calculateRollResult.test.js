import calculateRollResult from './calculateRollResult'

describe('Given the total number of dice, the result of a d20, and result of a d6', () => {
	describe('When the total number of dice equals 0', () => {
		const result = calculateRollResult(0, 15, 4)
		test('Then returns the d20 result', () => expect(result).toEqual(15))
		test('Then returns a number', () => expect(typeof result).toEqual('number'))
	})

	describe('When the total number of dice is greater than 0', () => {
		const result = calculateRollResult(2, 15, 4)
		test('Then returns the d20 result + d6 result', () => expect(result).toEqual(19))
	})

	describe('When the total number of dice is less than 0', () => {
		const result = calculateRollResult(-12, 15, 4)
		test('Then returns the d20 result + d6 result', () => expect(result).toEqual(11))
	})
})
