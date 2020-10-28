const convertRunType = value => {
	switch(value) {
		case 0:
			return "good feels"
		case 2:
			return 'cold-hearted'
		default:
			return 'standard'
	}
}

export default convertRunType