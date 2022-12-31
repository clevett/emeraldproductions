import { getD666, getRot, getSector, getThreat } from "../helpers";
import { atom } from "recoil";
import { getMood } from "../helpers/getMood";
export const sectorAtom = atom({
  key: "SECTOR_ATOM",
  default: getSector(),
});

export const threatAtom = atom({
  key: "THREAT_ATOM",
  default: getThreat(),
});

export const artifactAtom = atom({
  key: "ARTIFACT_ATOM",
  default: getD666(),
});
export const moodAtom = atom({
  key: "MOOD_ATOM",
  default: getMood(),
});

export const rotAtom = atom({
  key: "ROT_ATOM",
  default: getRot(),
});
