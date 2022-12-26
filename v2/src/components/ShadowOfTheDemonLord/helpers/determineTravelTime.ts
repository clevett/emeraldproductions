const calculateTotalHours = (miles: number, speed: number) =>
  Math.ceil(miles / speed);

const calculateDays = (hours: number) => Math.trunc(hours / 8);

const pluralString = (type: string, number: number) =>
  number === 1
    ? `${number} ${type}`
    : number > 1
    ? `${number} ${type}s`
    : false;

const combineStrings = (days: string | boolean, hours: string | boolean) =>
  days && hours ? `${days}, ${hours}` : days ? `${days}` : `${hours}`;

export const determineTravelTime = (
  milesPerHour: number,
  milesToTravel: number
) => {
  const totalHours = calculateTotalHours(milesToTravel, milesPerHour);

  const days = calculateDays(totalHours);
  const daysString = pluralString("day", days);

  const hours = totalHours - days * 8;
  const hoursString = pluralString("hour", hours);

  return combineStrings(daysString, hoursString);
};
