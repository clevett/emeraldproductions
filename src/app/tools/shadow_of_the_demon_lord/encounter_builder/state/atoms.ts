import { atom } from "jotai";
import { Levels } from "../enums";
import { Filter, Level, Monster, Value } from "../types";

export const dataAtom = atom<Monster[]>([]);
export const levelAtom = atom<Level>(Levels.NOVICE);
export const selectedNPCsAtom = atom<Monster[]>([]);
export const filtersAtom = atom<{ [key in Filter]: Value }>({
  descriptor: "human",
  source: undefined,
  difficulty: undefined,
});
export const searchNPCsAtom = atom<Monster[]>([]);
