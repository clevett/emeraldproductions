
//GIVEN I select plains/roads
//WHEN terrain multiplier of (x1) is applied
//THEN 1 is not added to the multiplier
const evaluateMultiplier = multiplier => multiplier === 1 ? 0 : multiplier

//GIVEN status is true / false
//WHEN sum and multiplier are passed in
//THEN sum is returned with multiplier added / subtracted
const cumulateMultiplier = (sum, multiplier, status) => status ? sum += multiplier : sum -= multiplier

//GIVEN multiple terrains are available
//WHEN terrains are toggle
//THEN accumulate the multipliers
const calculateMultiplier = (stateMultiplier, objectMultiplier, status) => {
	const originalMultiplier = evaluateMultiplier(stateMultiplier)
	const incomingMultiplier = evaluateMultiplier(objectMultiplier)
	const updatedMultiplier = cumulateMultiplier(originalMultiplier, incomingMultiplier, status)
	return Math.max(updatedMultiplier, 1)
}

//GIVE terrain and weather
//WHEN values are over 1 / values are equal 1
//THEN return accumluated values / return 1
const combineMultipliers = (terrain, weather) => Math.max(evaluateMultiplier(terrain) + evaluateMultiplier(weather), 1)

export {evaluateMultiplier, cumulateMultiplier, calculateMultiplier, combineMultipliers}