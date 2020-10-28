import multiplyByBaseRate from './multiplyByBaseRate'

describe('Given multiplyByBaseRate is called', () => {
	describe('when passed a multiplier', () => {
		const result = multiplyByBaseRate(3, 3000)
		it('then returns a number', () => {
			expect(typeof result).toEqual('number')
		})

		it('then returns multiplier * 3000', () => {
			expect(result).toEqual(9000)
		})
	})

	describe('when multipler is 0', () => {
		const result = multiplyByBaseRate(0, 3000)
		it('then return 3000', () => {
			expect(result).toEqual(3000)
		})
	})
})