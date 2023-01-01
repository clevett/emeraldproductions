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

const defaultThreatLevel = 3;
const defaultEnterSector = getSectorRoll(`${defaultThreatLevel}d6`);

export const threatLevelAtom = atom({
  key: "THREAT_LEVEL_ATOM",
  default: defaultThreatLevel,
});

export const sectorRollAtom = atom({
  key: "SECTOR_ROLL_ATOM",
  default: defaultEnterSector,
});

export const artifactsAtom = atom<number[]>({
  key: "ARTIFACTS_ATOM",
  default: getArtifacts(defaultEnterSector.artifacts),
});
