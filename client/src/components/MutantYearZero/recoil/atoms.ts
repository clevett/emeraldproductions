import { atom } from "recoil";

import {
  getMood,
  getRot,
  getSector,
  getSectorRoll,
  getThreat,
} from "../helpers";
import { getArtifacts } from "../helpers/getArtifacts";

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

const threatLevelDefault = 3;
const sectorRollDefault = getSectorRoll(`${threatLevelDefault}d6`);
const count = sectorRollDefault.filter((e: number) => e === 6).length;
export const threatLevelAtom = atom({
  key: "THREAT_LEVEL_ATOM",
  default: threatLevelDefault,
});

export const sectorRollAtom = atom({
  key: "SECTOR_ROLL_ATOM",
  default: sectorRollDefault,
});

export const sectorArtifactAtom = atom<number[]>({
  key: "SECTOR_ARTIFACT_ATOM",
  default: getArtifacts(count),
});
