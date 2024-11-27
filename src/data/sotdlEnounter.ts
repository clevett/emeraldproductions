export type Encounter = (typeof encounter)[number];

export enum Threats {
  EXTREME = "Extreme",
  MAJOR = "Major",

  MODERATE = "Moderate",

  MINOR = "Minor",
}
export const threat = [
  {
    name: Threats.EXTREME,
    frequency: "Hourly",
  },
  {
    name: Threats.MAJOR,
    frequency: "Once per 4 hours",
  },
  {
    name: Threats.MODERATE,
    frequency: "Once per 8 hours",
  },
  {
    name: Threats.MINOR,
    frequency: "Once per day and once per night",
  },
];

export const encounter = [
  {
    encounter: "Helpful",
    [Threats.MINOR]: [20],
    [Threats.MODERATE]: [20],
    [Threats.MAJOR]: null,
    [Threats.EXTREME]: null,
  },
  {
    encounter: "Harmless",
    [Threats.MINOR]: [18, 19],
    [Threats.MODERATE]: [18, 19],
    [Threats.MAJOR]: [20],
    [Threats.EXTREME]: null,
  },
  {
    encounter: "Environment",
    [Threats.MINOR]: [14, 15, 16, 17],
    [Threats.MODERATE]: [14, 15, 16, 17],
    [Threats.MAJOR]: [18, 19],
    [Threats.EXTREME]: [19, 20],
  },
  {
    encounter: "Nothing",
    [Threats.MINOR]: [6, 7, 8, 9, 10, 11, 12, 13],
    [Threats.MODERATE]: [8, 9, 10, 11, 12, 13],
    [Threats.MAJOR]: [14, 15, 16, 17],
    [Threats.EXTREME]: [17, 18],
  },
  {
    encounter: "Easy combat",
    [Threats.MINOR]: [2, 3, 4, 5],
    [Threats.MODERATE]: [4, 5, 6, 7],
    [Threats.MAJOR]: [8, 9, 10, 11, 12, 13],
    [Threats.EXTREME]: [13, 14, 15, 16],
  },
  {
    encounter: "Average combat",
    [Threats.MINOR]: [1],
    [Threats.MODERATE]: [2, 3],
    [Threats.MAJOR]: [4, 5, 6, 7],
    [Threats.EXTREME]: [7, 8, 9, 10, 11, 12],
  },
  {
    encounter: "Challenging combat",
    [Threats.MINOR]: null,
    [Threats.MODERATE]: [1],
    [Threats.MAJOR]: [2, 3],
    [Threats.EXTREME]: [3, 4, 5, 6],
  },
  {
    encounter: "Hard combat",
    [Threats.MINOR]: null,
    [Threats.MODERATE]: null,
    [Threats.MAJOR]: [1],
    [Threats.EXTREME]: [1, 2],
  },
];
