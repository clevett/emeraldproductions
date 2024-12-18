import { Levels } from "../enums";
import { atom, atomFamily } from "recoil";
import { Level, Monster } from "../types";

export const levelAtom = atom<Level>({
  key: "SOTDL_LEVEL_ATOM",
  default: Levels.NOVICE,
});

export const selectedNPCsIDsAtom = atom<Monster["_id"][]>({
  key: "SOTDL_SELECTED_NPCS_IDS_ATOM",
  default: [],
});

export const selectedNPCsAtomFamily = atomFamily<Monster, Monster["_id"]>({
  key: "SOTDL_SELECTED_NPCS_ATOM_FAMILY",
});

export const searchNPCsIDsAtom = atom<Monster["_id"][]>({
  key: "SOTDL_SEARCH_NPCS_IDS_ATOM",
  default: [],
});

export const searchNPCsAtomFamily = atomFamily<Monster, Monster["_id"]>({
  key: "SOTDL_SEARCH_NPCS_ATOM_FAMILY",
});
