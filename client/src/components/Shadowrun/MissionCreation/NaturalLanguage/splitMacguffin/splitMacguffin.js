import randomArrayElement from '../randomArrayElement/randomArrayElement'

const splitMacguffin = macguffin => {
	const split = macguffin.split(', ')
	const macguffins = [split[0], split[1], split[2].split('or ')]

	return randomArrayElement(macguffins)
}

export default splitMacguffin