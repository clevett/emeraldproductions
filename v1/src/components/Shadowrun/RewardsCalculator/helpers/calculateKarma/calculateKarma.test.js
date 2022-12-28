import calculateKarma from './calculateKarma'

describe('Given calculateKarma is called', () => {
	describe('when passed the karma number', () => {	
		const result = calculateKarma(2, 1, 14)

		it('then returns a number', () => {
			expect(typeof result).toEqual('number')
		})

		it('then returns the total', () => {
			expect(result).toEqual(5)
		})
	})
})
