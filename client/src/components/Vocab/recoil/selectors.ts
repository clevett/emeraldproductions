import { DefaultValue, selector, selectorFamily } from "recoil";
import { Word } from "../types";

import {
  cardAtomFamily,
  selectedCardIdAtom,
  cardIdsAtom,
  languageAtom,
  categoryAtom,
  defaultLanguage,
} from "./atoms";
import { flattenWordList, getCategoryList } from "../helpers";

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

export const languageSelector = selector({
  key: "languageSelector",
  get: ({ get }) => get(languageAtom),
  set: ({ set, get }, newValue) => {
    set(languageAtom, newValue);

    if (newValue instanceof DefaultValue) {
      newValue = defaultLanguage;
    }

    const category = get(categoryAtom);
    const wordList = getCategoryList(newValue, category.name);
    set(cardIdsAtom, flattenWordList(wordList));
  },
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
