import { DefaultValue, selector } from "recoil";
import {
  dataAtomFamily,
  dataIdsAtom,
  filtersAtom,
  levelAtom,
  searchNPCsAtomFamily,
  searchNPCsIDsAtom,
  selectedNPCsAtomFamily,
  selectedNPCsIDsAtom,
} from "./atoms";
import { Monster } from "../types";
export const levelSelector = selector({
  key: "SOTDL_LEVEL_SELECTOR",
  get: ({ get }) => get(levelAtom),
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue || newValue === undefined) {
      reset(levelAtom);
      return;
    }

    set(levelAtom, newValue);
  },
});

export const difficultyTotalSelector = selector({
  key: "SOTDL_DIFFICULTY_TOTAL_SELECTOR",
  get: ({ get }) => {
    const ids = get(selectedNPCsIDsAtom);
    const family = ids.map((id) => get(selectedNPCsAtomFamily(id)));
    return family.map((s) => s.difficulty).reduce((a, b) => a + b, 0) ?? 0;
  },
});

export const selectedNPCsSelector = selector({
  key: "SOTDL_SELECTED_NPCS_SELECTOR",
  get: ({ get }) => {
    const ids = get(selectedNPCsIDsAtom);
    return ids.map((id) => get(selectedNPCsAtomFamily(id)));
  },
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue || newValue === undefined) {
      reset(selectedNPCsIDsAtom);
      return;
    }

    set(
      selectedNPCsIDsAtom,
      newValue.map((s) => s._id)
    );

    newValue.forEach((s) => set(selectedNPCsAtomFamily(s._id), s));
  },
});

export const searchNPCsSelector = selector({
  key: "SOTDL_SEARCH_NPCS_SELECTOR",
  get: ({ get }) => {
    const ids = get(searchNPCsIDsAtom);
    const family = ids.map((id) => get(searchNPCsAtomFamily(id)));
    return family.filter((s) => s !== undefined);
  },
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue || newValue === undefined) {
      reset(searchNPCsIDsAtom);
      return;
    }

    const ids: Monster["_id"][] = [];

    newValue.forEach((s) => {
      if (s === undefined) return;
      set(searchNPCsAtomFamily(s._id), s);
      ids.push(s._id);
    });

    set(searchNPCsIDsAtom, ids);
  },
});

export const filtersSelector = selector({
  key: "SOTDL_FILTERS_SELECTOR",
  get: ({ get }) => get(filtersAtom),
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue || newValue === undefined) {
      reset(filtersAtom);
      return;
    }

    set(filtersAtom, newValue);
  },
});

export const dataSelector = selector({
  key: "SOTDL_DATA_SELECTOR",
  get: ({ get }) => {
    const ids = get(dataIdsAtom);
    return ids?.map((id) => get(dataAtomFamily(id)));
  },
});
