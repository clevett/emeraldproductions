import { Sector } from "./myz_environments";

export enum Card {
  ARTIFACT = "Artifact",
  ENVIRONMENT = "Environment",
  MOOD = "Mood",
  ROT = "Rot Level",
  RUIN = "Ruin",
  THREAT = "Threat",
}

enum RotLevels {
  HEAVY = "Rot-Heavy Area",
  OASIS = "Rot Oasis",
  WEAK = "Weak Rot",
}

export const rotLevels = [
  {
    result: [11, 12],
    name: RotLevels.OASIS,
    description: "The PCs are safe from the Rot here.",
    value: 0,
  },
  {
    result: [
      13, 14, 15, 16, 21, 22, 23, 24, 25, 26, 31, 32, 33, 34, 35, 36, 41, 42,
      43, 44, 45, 46, 51, 52, 53, 54, 55,
    ],
    name: RotLevels.WEAK,
    description: "The PCs suffer one Rot Point per day spent in such sectors.",
    value: 1,
  },
  {
    result: [56, 61, 62, 63, 64, 65, 66],
    name: RotLevels.HEAVY,
    description: "The PCs suffer one Rot Point per hour.",
    value: 2,
  },
];

export type ZoneSector = {
  id: string;
  rot: string;
  sector: Sector;
  mood: string;
  threat: {
    name: string;
    count: number;
  };
  artifact: {
    name: string;
    count: number;
  };
  ruin: string;
};
