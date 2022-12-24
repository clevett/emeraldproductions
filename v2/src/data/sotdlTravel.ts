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

export const encounter = [
  {
    encounter: "Helpful",
    minor: [20],
    moderate: [20],
    major: null,
    extreme: null,
  },
  {
    encounter: "Harmless",
    minor: [18, 19],
    moderate: [18, 19],
    major: [20],
    extreme: null,
  },
  {
    encounter: "Environment",
    minor: [14, 15, 16, 17],
    moderate: [14, 15, 16, 17],
    major: [18, 19],
    extreme: [19, 20],
  },
  {
    encounter: "Nothing",
    minor: [6, 7, 8, 9, 10, 11, 12, 13],
    moderate: [8, 9, 10, 11, 12, 13],
    major: [14, 15, 16, 17],
    extreme: [17, 18],
  },
  {
    encounter: "Easy combat",
    minor: [2, 3, 4, 5],
    moderate: [4, 5, 6, 7],
    major: [8, 9, 10, 11, 12, 13],
    extreme: [13, 14, 15, 16],
  },
  {
    encounter: "Average combat",
    minor: [1],
    moderate: [2, 3],
    major: [4, 5, 6, 7],
    extreme: [7, 8, 9, 10, 11, 12],
  },
  {
    encounter: "Challenging combat",
    minor: null,
    moderate: [1],
    major: [2, 3],
    extreme: [3, 4, 5, 6],
  },
  {
    encounter: "Hard combat",
    minor: null,
    moderate: null,
    major: [1],
    extreme: [1, 2],
  },
];

export const threat = [
  {
    name: "Extreme",
    frequency: "Hourly",
  },
  {
    name: "Major",
    frequency: "Once per 4 hours",
  },
  {
    name: "Moderate",
    frequency: "Once per 8 hours",
  },
  {
    name: "Minor",
    frequency: "Once per day and once per night",
  },
];
