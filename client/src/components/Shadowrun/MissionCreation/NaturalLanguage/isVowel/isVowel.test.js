import isVowel from './isVowel'

describe('WHEN isVowel is given a string', () => {
	['a', 'e', 'i', 'o', 'u'].forEach(vowel => {
		test('THEN returns true if it starts with a lowercase vowel', () => expect( isVowel(vowel)).toBeTruthy() )
		test('THEN returns true if it starts with an uppercase vowel', () => expect( isVowel(vowel.toUpperCase())).toBeTruthy() )
	})

	test('THEN returns false if it starts with a consenant', () => expect( isVowel('consenant')).toBeFalsy() )
})
