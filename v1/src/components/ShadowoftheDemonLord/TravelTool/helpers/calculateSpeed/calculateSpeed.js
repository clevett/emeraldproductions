const calculatePace = milesPerHour => milesPerHour / 1

const adjustedSpeed = (pace, multiplier) => Math.round(pace * (1 / multiplier) * 10) / 10

export { calculatePace, adjustedSpeed }