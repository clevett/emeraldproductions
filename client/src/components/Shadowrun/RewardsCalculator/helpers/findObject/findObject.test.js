import findObject from './findObject'

describe('Given find object is called', () => {
	describe('when given the name of an object', () => {
		const data = [
			{
				name: "survived",
				description: "Character survived",
				karma: 2
			},
			{
				name: "allObjectives",
				description: "Group completed all objectives",
				karma: 2
			},
		]

		it('then returns that object', () => {
			expect(findObject('survived', data).karma).toEqual(2)
		})
	})
})