import React from 'react'

import isVowel from '../isVowel/isVowel'
import splitEmployer from './splitEmployer/splitEmployer'

const Employer = (result, employer) => {
	if (result === 12 || result === 3 || result === 4) {
		employer = splitEmployer(employer)
	}

	const article = isVowel(employer) ? 'An' : 'A'
	if (result === 5) {
		return <span>{article} <a href='https://rpgenerator.net/cyberpunk/corporations!' target="_blank" rel="noopener noreferrer">{employer}</a></span>
	} else {
		return <span>{article} {employer}</span>
	}
}

export default Employer
