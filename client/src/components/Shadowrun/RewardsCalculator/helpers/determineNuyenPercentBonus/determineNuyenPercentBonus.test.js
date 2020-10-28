import determineNuyenPercentBonus from './determineNuyenPercentBonus'

describe('Given determineNuyenPercentBonus is called', () => {
	describe('when a standard run type', () => {	
		const result = determineNuyenPercentBonus('standard')

		it('then returns adds them together', () => {
			expect(typeof result).toEqual('number')
			expect(result).toEqual(0)
		})
	})

	describe('when passed a good feels', () => {	
		const result = determineNuyenPercentBonus('good feels', 0.1)
		it('then returns a negative percent', () => expect(result).toEqual(-0.1))
	})

	describe('when passed a cold-hearted', () => {	
		const result = determineNuyenPercentBonus('cold-hearted', 0.1)
		it('then returns a positive percent', () => expect(result).toEqual(0.1))
	})
})