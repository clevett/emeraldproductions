const splitEmployer = string => {
	let array = string.split(' or ')

	if (array[1].includes(' ')) {
		array = [`${array.shift()} ${array[0].split(' ')[1]}`, ...array]
	} else {
		array = [`${array[0].split(' ')[0]} ${array.pop()}`, ...array]
	}

	return array
}

export default splitEmployer
