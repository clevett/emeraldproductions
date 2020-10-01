import React from 'react'

import isVowel from '../isVowel/isVowel'
import randomArrayElement from '../randomArrayElement/randomArrayElement'
import splitMacguffin from './splitMacguffin/splitMacguffin'

const MacGuffin = (result, macguffin) => {
	if (result === 6) {
		macguffin = randomArrayElement(splitMacguffin(macguffin))
	}

	if (result === 1 || result === 2) {
		if (result === 1) {
			return <a href='https://rpgenerator.net/cyberpunk/by-sovereignity' target="_blank" rel="noopener noreferrer">{macguffin}</a>
		} else  {
			return <span>{macguffin}</span>
		}
	} else {
		const article = isVowel(macguffin) ? 'an' : 'a'
		return <span>{article} {macguffin}</span>
	}
}

export default MacGuffin
