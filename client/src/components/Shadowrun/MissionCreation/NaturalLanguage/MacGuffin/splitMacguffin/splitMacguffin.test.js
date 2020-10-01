import splitMacguffin from './splitMacguffin'

describe('WHEN splitMacguffin is given a string with ", " && "or "', () => {
	const example = 'urban building, rural location, or infrastructure object'
	const result = splitMacguffin(example)
	test('THEN returns an array', () => expect(Array.isArray(result)).toBeTruthy() )
	test('THEN returns removes ", "', () => expect(result[0]).toBe('urban building') )
	test('THEN returns removes ", "', () => expect(result[1]).toBe('rural location') )
	test('THEN returns removes "or "', () => expect(result[2]).toBe('infrastructure object') )
})
