import { Levels } from "../enums";
import { atom, atomFamily } from "recoil";
import { Filter, Level, Monster, Value } from "../types";
import { syncEffect } from "recoil-sync";

export const dataIdsAtom = atom<Monster["_id"][]>({
  key: "SOTDL_NPCS_DATA_IDS_ATOM",
  default: [],
  effects: [
    syncEffect({
      itemKey: "props-ids",
      storeKey: "init-from-props",
      refine: (value: unknown) => ({
        type: "success",
        value: value as Monster["_id"][],
        warnings: [],
      }),
    }),
  ],
});

export const dataAtomFamily = atomFamily<Monster, Monster["_id"]>({
  key: "SOTDL_NPCS_DATA_ATOM_FAMILY",
  effects: (param) => [
    syncEffect({
      itemKey: param,
      storeKey: "init-from-props",
      refine: (value: unknown) => ({
        type: "success",
        value: value as Monster,
        warnings: [],
      }),
    }),
  ],
});

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

export const filtersAtom = atom<{ [key in Filter]: Value }>({
  key: "SOTDL_FILTERS_ATOM",
  default: {
    descriptor: "human",
    source: undefined,
    difficulty: undefined,
  },
});
