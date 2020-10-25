import findObject from './findObject'

describe('Given find object is called', () => {
	describe('when given the name of an object', () => {
		it('then returns that object', () => {
			expect(findObject('survived').karma).toEqual(2)
		})
	})
})