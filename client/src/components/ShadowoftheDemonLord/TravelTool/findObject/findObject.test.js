import findObject from './findObject'

const data = [
	{
		"name": "Powerful storm",
		"multiplier": 4,
		"result": [3]
	},
	{
		"name": "Heavy precipitation",
		"multiplier": 1.5,
		"result": [4, 5]
	}
]

describe('When findObject is given an array of objects AND a string', () => {
	const result = findObject(data, "Heavy precipitation")
	test('Then returns the object', () => expect(result).toEqual(data[1]))
	test('Then returns an object', () => expect(typeof result).toEqual('object'))
})