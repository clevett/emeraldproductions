import React from 'react'

import isVowel from './isVowel/isVowel'
import splitMacguffin from './splitMacguffin/splitMacguffin'

const MacGuffin = (result, macguffin) => {
	if (result === 6) {
		macguffin = splitMacguffin(macguffin)
	}

	console.log(macguffin)
	if (macguffin.startsWith('a ')) {
		return <span>{macguffin}</span>
	} else {
		const article = isVowel(macguffin) ? 'an' : 'a'
		return <span>{article} {macguffin}</span>
	}
}

export default MacGuffin
