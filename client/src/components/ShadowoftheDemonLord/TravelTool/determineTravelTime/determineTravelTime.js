
const calculateTotalHours = (miles, speed) => Math.ceil(miles / speed)

const calculateDays = hours => Math.trunc(hours / 8)

const pluralString = (type, number) => number === 1 ? `${number} ${type}` : number > 1 ? `${number} ${type}s` : false

const combineStrings = (days, hours) => days && hours ? `${days}, ${hours}` : days ? `${days}` : `${hours}`

const determineTravelTime = (milesPerHour, milesToTravel) => {
	const totalHours = calculateTotalHours(milesToTravel, milesPerHour)

	const days = calculateDays(totalHours)
	const daysString = pluralString('day', days)

	console.log(daysString)

	const hours = totalHours - (days * 8)
	const hoursString = pluralString('hour', hours)

	console.log(hoursString)

	const string = combineStrings(daysString, hoursString)

	return string
}

export { determineTravelTime, calculateDays, calculateTotalHours, pluralString, combineStrings }