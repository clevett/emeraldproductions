export const pace = [
  {
    name: "walk",
    hour: 3,
    day: 24,
  },
  {
    name: "cautious",
    hour: 1,
    day: 8,
  },
  {
    name: "jog",
    hour: 4,
    day: 32,
  },
  {
    name: "run",
    hour: 8,
    day: null,
  },
];

export const terrain = [
  {
    name: "Desert",
    multiplier: 1.5,
  },
  {
    name: "Forest",
    multiplier: 1.5,
  },
  {
    name: "Hills",
    multiplier: 1.5,
  },
  {
    name: "Mountains",
    multiplier: 3,
  },
  {
    name: "Plains/Roads",
    multiplier: 1,
  },
  {
    name: "Swamp",
    multiplier: 2,
  },
];

export const weather = [
  {
    name: "Powerful storm",
    multiplier: 4,
    result: [3],
  },
  {
    name: "Heavy precipitation",
    multiplier: 1.5,
    result: [4, 5],
  },
  {
    name: "Unseasonably cold",
    multiplier: 1,
    result: [6, 7, 8],
  },
  {
    name: "Normal conditions",
    multiplier: 1,
    result: [9, 10, 11, 12],
  },
  {
    name: "Unseasonably warm",
    multiplier: 1,
    result: [13, 14, 15],
  },
  {
    name: "Precipitation",
    multiplier: 1.5,
    result: [16, 17],
  },
  {
    name: "Storm",
    multiplier: 2,
    result: [18],
  },
];

export const threat = [
  {
    name: "extreme",
    frequency: "Hourly",
  },
  {
    name: "major",
    frequency: "Once per 4 hours",
  },
  {
    name: "moderate",
    frequency: "Once per 8 hours",
  },
  {
    name: "minor",
    frequency: "Once per day and once per night",
  },
];
