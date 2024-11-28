import { Language, Category } from "../types";
import { wordLists } from "../../../../client_backup/src/components/Vocab/wordlists";

export const getCategoryList = (lang: Language, category: Category["name"]) => {
  const index = wordLists[lang].findIndex((e) => e.name === category);
  return wordLists[lang][index]?.list || [];
};
