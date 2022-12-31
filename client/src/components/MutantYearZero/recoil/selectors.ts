import { selector } from "recoil";
import { sectorAtom } from "./atoms";

export const selectEnvironment = selector({
  key: "SELECT_ENVIRONMENT",
  get: ({ get }) => {
    const sector = get(sectorAtom);
    return sector.environment;
  },
});

export const selectThreat = selector({
  key: "SELECT_THREAT",
  get: ({ get }) => {
    const sector = get(sectorAtom);
    return sector.threat;
  },
});

export const selectArtifact = selector({
  key: "SELECT_ARTIFACT",
  get: ({ get }) => {
    const sector = get(sectorAtom);
    return sector.artifact;
  },
});

export const selectRuin = selector({
  key: "SELECT_RUIN",
  get: ({ get }) => {
    const sector = get(sectorAtom);
    return sector.ruin;
  },
});
