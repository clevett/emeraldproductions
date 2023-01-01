import { selector, DefaultValue } from "recoil";
import { getArtifacts } from "../helpers/getArtifacts";
import { artifactsAtom, sectorAtom, sectorRollAtom } from "./atoms";

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
  get: ({ get }) => get(sectorRollAtom).threat,
});

export const selectArtifactCount = selector({
  key: "SELECT_SECTOR_ARTIFACT_COUNT",
  get: ({ get }) => get(sectorRollAtom).artifacts,
});

export const selectArtifacts = selector({
  key: "SELECT_ARTIFACTS",
  get: ({ get }) => get(artifactsAtom),
  set: ({ set, get }, newValue) => {
    if (newValue instanceof DefaultValue) {
      const count = get(selectArtifactCount);
      set(artifactsAtom, getArtifacts(count));
      return;
    }

    set(artifactsAtom, newValue);
  },
});
