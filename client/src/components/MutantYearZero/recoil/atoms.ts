import { atom } from "recoil";

import {
  getMood,
  getRot,
  getSector,
  getSectorRoll,
  getThreat,
} from "../helpers";

export const sectorAtom = atom({
  key: "SECTOR_ATOM",
  default: getSector(),
});

export const threatAtom = atom({
  key: "THREAT_ATOM",
  default: getThreat(),
});

export const moodAtom = atom({
  key: "MOOD_ATOM",
  default: getMood(),
});

export const rotAtom = atom({
  key: "ROT_ATOM",
  default: getRot(),
});

export const threatLevelAtom = atom({
  key: "THREAT_LEVEL_ATOM",
  default: 3,
});

export const sectorRollAtom = atom({
  key: "SECTOR_ROLL_ATOM",
  default: getSectorRoll("3d6"),
});
