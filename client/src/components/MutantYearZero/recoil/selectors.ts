import { selector } from "recoil";
import { sectorAtom, sectorRollAtom } from "./atoms";

export const selectEnvironment = selector({
  key: "SELECT_ENVIRONMENT",
  get: ({ get }) => {
    return get(sectorAtom).environment;
  },
});

export const selectThreat = selector({
  key: "SELECT_THREAT",
  get: ({ get }) => {
    return get(sectorAtom).threat;
  },
});

export const selectArtifact = selector({
  key: "SELECT_ARTIFACT",
  get: ({ get }) => {
    return get(sectorAtom).artifact;
  },
});

export const selectRuin = selector({
  key: "SELECT_RUIN",
  get: ({ get }) => {
    return get(sectorAtom).ruin;
  },
});

export const selectSectorThreat = selector({
  key: "SELECT_SECTOR_THREAT",
  get: ({ get }) => {
    const sectorRoll = get(sectorRollAtom);
    return sectorRoll.threat;
  },
});

export const selectArtifactCount = selector({
  key: "SELECT_SECTOR_ARTIFACT_COUNT",
  get: ({ get }) => {
    const sectorRoll = get(sectorRollAtom);
    return sectorRoll.artifacts;
  },
});
