import calculateNuyenMultiplier from './calculateNuyenMultiplier'

describe('Given calculateNuyenMultiplier is called', () => {
	describe('when passed the dicepool and situational modifier', () => {	
		const result = calculateNuyenMultiplier(14, 2)
		it('then returns a number', () => {
			expect(typeof result).toEqual('number')
		})

		it('then returns adds them together', () => expect(result).toEqual(5))
	})

	describe('when passed a 0', () => {	
		const result = calculateNuyenMultiplier(0, 0)
		it('then returns a minimum of 1', () => expect(result).toEqual(0))
	})
})
