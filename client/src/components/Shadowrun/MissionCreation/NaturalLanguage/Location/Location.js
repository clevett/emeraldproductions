import React from 'react'

const Location = (result, location) => {
	if (result === 1) {
		return <span>at a <a href='https://rpgenerator.net/cyberpunk/catering' target="_blank" rel="noopener noreferrer">{location}</a></span>
	} else if (result === 6) {
		return <span>in {location}</span>
	} else {
		return <span>in a {location}</span>
	}
}

export default Location
