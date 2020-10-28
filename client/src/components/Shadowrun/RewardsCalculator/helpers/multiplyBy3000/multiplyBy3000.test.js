import multiplyBy3000 from './multiplyBy3000'

describe('Given multiplyBy3000 is called', () => {
	describe('when passed a multiplier', () => {
		const result = multiplyBy3000(3)
		it('then returns a number', () => {
			expect(typeof result).toEqual('number')
		})

		it('then returns multiplier * 3000', () => {
			expect(result).toEqual(9000)
		})
	})

	describe('when multipler is 0', () => {
		const result = multiplyBy3000(0)
		it('then return 3000', () => {
			expect(result).toEqual(3000)
		})
	})
})