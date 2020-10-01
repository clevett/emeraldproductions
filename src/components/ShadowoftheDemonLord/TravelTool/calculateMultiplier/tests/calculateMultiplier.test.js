import { calculateMultiplier } from '../calculateMultiplier'

describe('When called', () => {
	const result = calculateMultiplier()
	test('Then returns a number', () => expect(typeof result).toEqual('number'))
})

describe('When the state multiplier is 1 and status is true', () => {
	const result = calculateMultiplier(1, 1.5, true)
	test('Then returns the just incoming multipler', () => expect(result).toEqual(1.5))
})

describe('When the incoming multiplier is 1 and status is true', () => {
	const result = calculateMultiplier(1.5, 1, true)
	test('Then returns the just the state multipler', () => expect(result).toEqual(1.5))
})

describe('When the state and incoming multiplier are greater than one and status is true', () => {
	const result = calculateMultiplier(1.5, 1.5, true)
	test('Then returns the sum', () => expect(result).toEqual(3))
})

describe('When the state and incoming multiplier are greater than one and status is false', () => {
	const result = calculateMultiplier(3, 1.5)
	test('Then subtracts from the state multiplier', () => expect(result).toEqual(1.5))
})

describe('When the calculated value is less than 1 and status is false', () => {
	const result = calculateMultiplier(0, 1.5)
	test('Then returns a min of 1', () => expect(result).toEqual(1))
})