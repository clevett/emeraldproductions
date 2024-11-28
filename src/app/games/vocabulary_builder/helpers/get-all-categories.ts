import { Language } from "../types";
import { wordLists } from "../../../../client_backup/src/components/Vocab/wordlists";

export const getAllCategories = (lang: Language) => {
  const wordList = wordLists[lang];
  const categories = wordList.map((word) => word.name);
  return categories;
};
