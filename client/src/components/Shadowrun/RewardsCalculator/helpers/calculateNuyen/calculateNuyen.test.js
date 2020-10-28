import { calculateNuyen, divideDicepool, multiplyBy3000, calculatorMultiplier, determinePercent } from "./calculateNuyen"

describe('Given calculateNuyen is called', () => {
	const mockState = {
		dicepool: 14,
		cashModifierPercent: 0.1
	}

	describe('when given three valid numbers', () => {
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

describe('Given divideDicepool is called', () => {
	describe('when passed the total dicepool', () => {	
		it('then returns a number divided by 4 rounded down', () => {
			const result = divideDicepool(14)
			expect(typeof result).toEqual('number')
			expect(result).toEqual(3)
		})
	})
})

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

describe('Given calculatorMultiplier is called', () => {
	describe('when passed the dicepool and situational modifier', () => {	
		const result = calculatorMultiplier(14, 2)
		it('then returns a number', () => {
			expect(typeof result).toEqual('number')
		})

		it('then returns adds them together', () => expect(result).toEqual(5))
	})

	describe('when passed a 0', () => {	
		const result = calculatorMultiplier(0, 0)
		it('then returns a minimum of 1', () => expect(result).toEqual(1))
	})
})

describe('Given determinePercent is called', () => {
	describe('when a standard run type', () => {	
		const result = determinePercent('standard')

		it('then returns adds them together', () => {
			expect(typeof result).toEqual('number')
			expect(result).toEqual(0)
		})
	})

	describe('when passed a good feels', () => {	
		const result = determinePercent('good feels', 0.1)
		it('then returns a negative percent', () => expect(result).toEqual(-0.1))
	})

	describe('when passed a cold-hearted', () => {	
		const result = determinePercent('cold-hearted', 0.1)
		it('then returns a positive percent', () => expect(result).toEqual(0.1))
	})
})