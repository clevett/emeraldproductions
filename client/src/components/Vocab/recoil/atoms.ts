import { atom, atomFamily, selectorFamily } from "recoil";
import { Card, Category, Language, Word } from "../types";
import { flattenWordList } from "../helpers";
import { defaultLanguage, defaultCategory, getCardDefault } from "./defaults";

export const languageAtom = atom<Language>({
  key: "languageAtom",
  default: defaultLanguage,
});

export const categoryAtom = atom<Category>({
  key: "categoryAtom",
  default: defaultCategory,
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
  default: selectorFamily({
    key: "cardAtomFamilyDefault",
    get:
      (word) =>
      ({ get }) => {
        const list = get(categoryAtom).list;
        return getCardDefault(word, list);
      },
  }),
});
