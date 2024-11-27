import { atom, atomFamily } from "recoil";
import { ZoneSector } from "../../../../../data/myz_create_the_zone";

const threatLevelDefault = 3;

export const threatLevelAtom = atom({
  key: "THREAT_LEVEL_ATOM",
  default: threatLevelDefault,
});

export const sectorIdsAtom = atom<string[]>({
  key: "SECTOR_IDS_ATOM",
  default: [],
});

export const sectorFamily = atomFamily<ZoneSector, string>({
  key: "SECTOR_ATOM_FAMILY",
  default: undefined,
});
