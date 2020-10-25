import convertRunType from './convertRunType'

describe("Given Convert Run Type is called", () => {
	describe("when it is a zero", () => {
		it("then returns 'good feels'", () => {
			expect(convertRunType(0)).toEqual('good feels')
		})
	})

	describe("when it is a 2", () => {
		it("then returns 'cold-hearted'", () => {
			expect(convertRunType(2)).toEqual('cold-hearted')
		})
	})

	describe("when it returns 'standard' as a default", () => {
		it("then returns 'standard'", () => {
			expect(convertRunType(100)).toEqual('standard')
		})
	})
})