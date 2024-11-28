import { Language } from "../types";
import { wordLists } from "../wordlists";

export const getAllCategories = (lang: Language) => {
  const wordList = wordLists[lang];
  const categories = wordList.map((word) => word.name);
  return categories;
};
