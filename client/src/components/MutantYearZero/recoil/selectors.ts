import { selector, DefaultValue } from "recoil";
import { getSectorRoll } from "../helpers";
import { sectorAtom, sectorRollAtom, threatLevelAtom } from "./atoms";

export const selectEnvironment = selector({
  key: "SELECT_ENVIRONMENT",
  get: ({ get }) => get(sectorAtom).environment,
});

export const selectThreat = selector({
  key: "SELECT_THREAT",
  get: ({ get }) => get(sectorAtom).threat,
});

export const selectArtifact = selector({
  key: "SELECT_ARTIFACT",
  get: ({ get }) => {
    return get(sectorAtom).artifact;
  },
});

export const selectRuin = selector({
  key: "SELECT_RUIN",
  get: ({ get }) => get(sectorAtom).ruin,
});

export const selectSectorThreat = selector({
  key: "SELECT_SECTOR_THREAT",
  get: ({ get }) => {
    const array = get(sectorRollAtom);
    return array.filter((e: number) => e === 1).length;
  },
});

export const selectArtifactCount = selector({
  key: "SELECT_SECTOR_ARTIFACT_COUNT",
  get: ({ get }) => get(sectorRollAtom).filter((e: number) => e === 6).length,
});

export const selectSectorRoll = selector({
  key: "SELECT_SECTOR_ROLL",
  get: ({ get }) => get(sectorRollAtom),
  set: ({ get, set }, newValue) => {
    const threatLevel = get(threatLevelAtom);

    if (newValue instanceof DefaultValue || newValue === undefined) {
      const newRoll = getSectorRoll(`${threatLevel}d6`);
      set(sectorRollAtom, newRoll);
      return;
    }

    set(sectorRollAtom, newValue);
  },
});
