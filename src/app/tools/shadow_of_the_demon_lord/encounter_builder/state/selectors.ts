import { atom } from "jotai";
import { dataAtom, filtersAtom, levelAtom, searchNPCsAtom, selectedNPCsAtom } from "./atoms";

export const levelSelector = levelAtom;
export const difficultyTotalSelector = atom((get) =>
  get(selectedNPCsAtom).reduce((total, monster) => total + monster.difficulty, 0)
);
export const selectedNPCsSelector = selectedNPCsAtom;
export const searchNPCsSelector = searchNPCsAtom;
export const filtersSelector = filtersAtom;
export const dataSelector = dataAtom;
