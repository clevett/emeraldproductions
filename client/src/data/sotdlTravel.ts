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

export enum Terrain {
  DESERT = "Desert",
  FOREST = "Forest",
  HILLS = "Hills",
  MOUNTAINS = "Mountains",

  PLAINS = "Plains/Roads",
  SWAMP = "Swamp",
}

export const terrain = [
  {
    name: Terrain.DESERT,
    multiplier: 1.5,
  },
  {
    name: Terrain.FOREST,
    multiplier: 1.5,
  },
  {
    name: Terrain.HILLS,
    multiplier: 1.5,
  },
  {
    name: Terrain.MOUNTAINS,
    multiplier: 3,
  },
  {
    name: Terrain.PLAINS,
    multiplier: 1,
  },
  {
    name: Terrain.SWAMP,
    multiplier: 2,
  },
];

export enum Weather {
  POWERFUL_STORM = "Powerful storm",
  PRECIPITATION = "Precipitation",

  STORM = "Storm",
}

export const weather = [
  {
    name: Weather.POWERFUL_STORM,
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
    name: Weather.PRECIPITATION,
    multiplier: 1.5,
    result: [16, 17],
  },
  {
    name: Weather.STORM,
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
