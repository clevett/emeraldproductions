import randomArrayElement from './randomArrayElement'

describe('WHEN randomArrayElement is given a array', () => {
	const array = ['a', 'e', 'i', 'o', 'u']
	const result = randomArrayElement(array)
	test('THEN returns a random entry of array', () => expect( typeof result).toBe('string') )
})
