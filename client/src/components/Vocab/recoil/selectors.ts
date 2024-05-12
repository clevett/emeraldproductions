import { DefaultValue, selector, selectorFamily } from "recoil";
import { Word } from "../types";

import {
  cardAtomFamily,
  selectedCardIdAtom,
  cardIdsAtom,
  languageAtom,
  categoryAtom,
} from "./atoms";
import { flattenWordList, getCategoryList } from "../helpers";
import { defaultLanguage } from "./defaults";

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
    return ids.map((id) => get(cardAtomFamily(id)));
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

export const categorySelector = selector({
  key: "categorySelector",
  get: ({ get }) => get(categoryAtom),
  set: ({ set, get }, newValue) => {
    set(categoryAtom, newValue);

    if (newValue instanceof DefaultValue) {
      newValue = get(categoryAtom);
    }

    const language = get(languageAtom);
    const wordList = getCategoryList(language, newValue.name);
    set(cardIdsAtom, flattenWordList(wordList));
  },
});

export const inPlayCardSelector = selector({
  key: "inPlayCardSelector",
  get: ({ get }) => {
    const list = get(cardListSelector);
    return list.filter((card) => card.isRevealed && !card.isMatched);
  },
});

export const activeCardSelector = selector({
  key: "activeCardSelector",
  get: ({ get }) => {
    const list = get(cardListSelector);
    return list.filter((card) => card.isRevealed || card.isMatched);
  },
});
