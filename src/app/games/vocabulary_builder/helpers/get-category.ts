import { Language, Category } from "../types";
import { wordLists } from "../../../../client_backup/src/components/Vocab/wordlists";

export const getCategory = (lang: Language, category: Category["name"]) => {
  return [...wordLists[lang]]?.find(({ name }: Category) => name === category);
};
