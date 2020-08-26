import splitEmployer from './splitEmployer'

describe('WHEN splitEmployer is given a string with " or "', () => {
	describe('AND when Group is in the string', () => {
		const example = 'Political or Activist Group'
		const result = splitEmployer(example)
		test('THEN returns an array with the descriptor', () => expect(result[1]).toBe('Activist Group') )
		test('THEN returns an array entry with added descriptor', () => expect(result[0]).toBe('Political Group') )
	})

	describe('AND when Being is in the string', () => {
		const example = 'Exotic or Mysterious Being'
		const result = splitEmployer(example)
		test('THEN returns an array with the descriptor', () => expect(result[1]).toBe('Mysterious Being') )
		test('THEN returns an array entry with added descriptor', () => expect(result[0]).toBe('Exotic Being') )
	})

	describe('ELSE', () => {
		const example = 'Government Official or Agency'
		const result = splitEmployer(example)
		test('THEN returns an array with the descriptor', () => expect(result[1]).toBe('Government Official') )
		test('THEN returns an array entry with added descriptor', () => expect(result[0]).toBe('Government Agency') )
	})
})
