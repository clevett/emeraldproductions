const splitMacguffin = macguffin => {
	const split = macguffin.split(', ')
	const removeOr = split.pop().split('or ')[1]

	return [...split, removeOr]
}

export default splitMacguffin