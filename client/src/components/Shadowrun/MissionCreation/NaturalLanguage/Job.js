import React from 'react'

import isVowel from './isVowel/isVowel'
import randomArrayElement from './randomArrayElement/randomArrayElement'

const Job = (result, job) => {
	const orSplit = string => randomArrayElement(string.split(' or '))
	
	if (result === 2 || result === 3) {
		job = orSplit(job)
	}
	
	const article = isVowel(job) ? 'an' : 'a'
	return <span>{article} {job}</span>
}

export default Job