import { Language, Category } from "../types";
import { wordLists } from "../wordlists";

export const getCategory = (lang: Language, category: Category["name"]) => {
  return [...wordLists[lang]]?.find(({ name }: Category) => name === category);
};
