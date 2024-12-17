import { DefaultValue, selector, selectorFamily } from "recoil";
import { Word } from "../types";

import {
  cardAtomFamily,
  selectedCardIdAtom,
  cardIdsAtom,
  languageAtom,
  categoryAtom,
} from "./atoms";

export const cardSelector = selectorFamily({
  key: "cardSelector",
  get:
    (word: Word) =>
    ({ get }) =>
      get(cardAtomFamily(word)),
  set:
    () =>
    ({ set, reset }, newValue) => {
      if (newValue instanceof DefaultValue) {
        reset(selectedCardIdAtom);
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
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(cardIdsAtom);
      return;
    }

    set(cardIdsAtom, newValue);
  },
});

export const languageSelector = selector({
  key: "languageSelector",
  get: ({ get }) => get(languageAtom),
  set: ({ set, get, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(languageAtom);
    }

    const activeCards = get(activeCardSelector);
    activeCards.forEach((card) => {
      reset(cardAtomFamily(card.word));
    });

    set(languageAtom, newValue);
  },
});

export const categorySelector = selector({
  key: "categorySelector",
  get: ({ get }) => get(categoryAtom),
  set: ({ set, get, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(categoryAtom);
    }

    const activeCards = get(activeCardSelector);
    activeCards.forEach((card) => {
      reset(cardAtomFamily(card.word));
    });

    set(categoryAtom, newValue);
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

export const gameOverSelector = selector({
  key: "gameOverSelector",
  get: ({ get }) => {
    const list = get(cardListSelector);
    return (
      list.every((card) => card.isMatched) ||
      list.every((card) => card.isRevealed)
    );
  },
});
