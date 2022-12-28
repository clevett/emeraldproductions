import calculateNuyen from "./calculateNuyen"

describe('Given calculateNuyen is called', () => {
	const mockState = {
		nuyenBaseRate: 3000,
		dicepool: 14,
		nuyenModifierPercent: 0.1
	}

	describe('when passed a state', () => {
		const state = {...mockState, type: 'standard'}
		it('then returns a number', () => {
			expect(typeof calculateNuyen(state)).toEqual('number')
		})

		it('then returns the total', () => {
			expect(calculateNuyen(state)).toEqual(3000)
		})
	})

	describe('when passed a good feels run', () => {
		const state = {...mockState, type: 'good feels'}
		it('then returns reduces subtotal by percent', () => {
			expect(calculateNuyen(state)).toEqual(2700)
		})
	})

	describe('when passed a cold hearted run', () => {
		const state = {...mockState, type: 'cold-hearted'}
		it('then returns adds to subtotal by percent', () => {
			expect(calculateNuyen(state)).toEqual(3300)
		})
	})
})

