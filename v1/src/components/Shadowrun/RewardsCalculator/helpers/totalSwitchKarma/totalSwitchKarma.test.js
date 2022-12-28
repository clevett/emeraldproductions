import totalSwitchKarma from './totalSwitchKarma'

describe('Given totalSwitchKarma is called', () => {
	const mockObject = {
		startingKarma: 2,
		karmaToAdd: 2
	}

	describe('when given an object with a false status', () => {
		it('then returns karma subtracted from the starting karma', () => {
			expect(totalSwitchKarma({...mockObject, status: false})).toEqual(0)
		})
	})

	describe('when given an object with a true status', () => {
		it('then returns karma added to the starting karma', () => {
			expect(totalSwitchKarma({...mockObject, status: true})).toEqual(4)
		})
	})
})