const calculatePace = milesPerHour => milesPerHour / 1

const adjustedSpeed = (pace, multiplier) => pace * (1 / multiplier)

export { calculatePace, adjustedSpeed }