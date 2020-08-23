import randomArrayElement from '../randomArrayElement/randomArrayElement'

const splitEmployer = string => {
	const array = string.split(' or ')
	const randomElement = randomArrayElement(array)

	let updatedString = `${randomElement}`

	if (!randomElement.includes(' ')) {
		const index = randomElement.includes('agency') ? 0 : 1
		const noun = array[index].split(' ')[index]
		if (index === 1) {
			updatedString += ` ${noun}`
		} else {
			updatedString = `${noun} ${randomElement}`
		}
	}

	return updatedString
}

export default splitEmployer
