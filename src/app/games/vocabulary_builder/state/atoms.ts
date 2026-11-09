import { atom } from "jotai";
import { atomFamily } from "jotai-family";
import { atomWithDefault } from "jotai/utils";
import { Card, Category, Language, Word } from "../types";
import { flattenWordList } from "../helpers";
import { defaultLanguage, defaultCategory, getCardDefault } from "./defaults";

export const languageAtom = atom<Language>(defaultLanguage);
export const categoryAtom = atom<Category>(defaultCategory);
export const cardIdsAtom = atomWithDefault<string[] | undefined>((get) =>
  flattenWordList(get(categoryAtom).list)
);
export const selectedCardIdAtom = atom<Word | undefined>(undefined);
export const cardAtomFamily = atomFamily((word: Word) =>
  atomWithDefault<Card>((get) => getCardDefault(word, get(categoryAtom).list))
);
