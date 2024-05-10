import { atom, atomFamily } from "recoil";
import { Card, Language, List, Word } from "../types";
import { flattenWordList, getRandomCategory, getMatch } from "../helpers";

const defaultLanguage = "fi-es";
const defaultCategory = getRandomCategory(defaultLanguage);

const getCardDefault = (word: Word, list: List) => ({
  isMatched: false,
  isRevealed: false,
  match: getMatch(word, list),
  word,
});

export const languageAtom = atom<Language>({
  key: "languageAtom",
  default: defaultLanguage,
});

export const cardIdsAtom = atom<string[] | undefined>({
  key: "cardIdsAtom",
  default: flattenWordList(defaultCategory.list),
});

export const selectedCardIdAtom = atom<Word | undefined>({
  key: "selectedCardIdAtom",
  default: undefined,
});

export const cardAtomFamily = atomFamily<Card, Word>({
  key: "cardAtomFamily",
  default: (param) => getCardDefault(param, defaultCategory.list),
});
