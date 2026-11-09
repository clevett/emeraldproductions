import { atom } from "jotai";
import { atomFamily } from "jotai-family";
import { RESET } from "jotai/utils";
import { SetStateAction } from "react";
import { Card, Category, Language, Word } from "../types";
import { cardAtomFamily, cardIdsAtom, languageAtom, categoryAtom } from "./atoms";

export const cardSelector = atomFamily((word: Word) => cardAtomFamily(word));

export const cardListSelector = atom((get) =>
  (get(cardIdsAtom) ?? []).map((id) => get(cardAtomFamily(id)))
);

export const wordListSelector = cardIdsAtom;

export const activeCardSelector = atom((get) =>
  get(cardListSelector).filter((card) => card.isRevealed || card.isMatched)
);

export const languageSelector = atom(
  (get) => get(languageAtom),
  (get, set, value: SetStateAction<Language>) => {
    get(activeCardSelector).forEach((card) => set(cardAtomFamily(card.word), RESET));
    set(languageAtom, value);
  }
);

export const categorySelector = atom(
  (get) => get(categoryAtom),
  (get, set, value: SetStateAction<Category>) => {
    get(activeCardSelector).forEach((card) => set(cardAtomFamily(card.word), RESET));
    set(categoryAtom, value);
    set(cardIdsAtom, RESET);
  }
);

export const inPlayCardSelector = atom((get) =>
  get(cardListSelector).filter((card) => card.isRevealed && !card.isMatched)
);

export const gameOverSelector = atom((get) => {
  const list: Card[] = get(cardListSelector);
  return list.every((card) => card.isMatched) || list.every((card) => card.isRevealed);
});
