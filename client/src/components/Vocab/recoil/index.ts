import {
  DefaultValue,
  atom,
  atomFamily,
  selector,
  selectorFamily,
} from "recoil";
import { Card, Language, Word } from "../types";
import { getCardDefault, getWordList, getRandomCategory } from "../helpers";

const defaultLanguage = "fi-es";
const defaultCategory = getRandomCategory(defaultLanguage);

export const languageAtom = atom<Language>({
  key: "languageAtom",
  default: defaultLanguage,
});

export const cardIdsAtom = atom<string[] | undefined>({
  key: "cardIdsAtom",
  default: getWordList(defaultCategory.list),
});

export const selectedCardIdAtom = atom<Word | undefined>({
  key: "selectedCardIdAtom",
  default: undefined,
});

export const cardAtomFamily = atomFamily<Card, Word>({
  key: "cardAtomFamily",
  default: (param) => getCardDefault(param, defaultCategory.list),
});

export const cardSelector = selectorFamily({
  key: "cardSelector",
  get:
    (word: Word) =>
    ({ get }) =>
      get(cardAtomFamily(word)),
  set:
    () =>
    ({ set }, newValue) => {
      if (newValue instanceof DefaultValue) {
        set(selectedCardIdAtom, newValue);
        return;
      }

      if (newValue) {
        set(cardAtomFamily(newValue.word), newValue);
      }
    },
});

export const selectedCardSelector = selector({
  key: "selectedCardSelector",
  get: ({ get }) => {
    const id = get(selectedCardIdAtom);
    return id ? get(cardAtomFamily(id)) : undefined;
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      set(selectedCardIdAtom, newValue);
      return;
    }

    if (newValue) {
      set(cardAtomFamily(newValue.word), newValue);
    }
  },
});

export const cardListSelector = selector({
  key: "cardListSelector",
  get: ({ get }) => {
    const ids = get(cardIdsAtom) ?? [];
    const list = ids.map((id) => get(cardAtomFamily(id)));
    return list;
  },
});

export const wordListSelector = selector({
  key: "wordListSelector",
  get: ({ get }) => get(cardIdsAtom),
});

export const inPlayCardSelector = selector({
  key: "inPlayCardSelector",
  get: ({ get }) => {
    const list = get(cardListSelector);
    const revealedList = list.filter(
      (card) => card.isRevealed && !card.isMatched
    );
    return revealedList;
  },
});
