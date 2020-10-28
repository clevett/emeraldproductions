import divideRoundDown from './divideRoundDown'

describe('Given divideRoundDown is called', () => {
	describe('when passed the total dicepool', () => {	
		const result = divideRoundDown(14, 4)

		it('then returns a number', () => {
			expect(typeof result).toEqual('number')
		})

		it('then returns value divided by the divisor rounded down', () => {
			expect(result).toEqual(3)
		})
	})
})
