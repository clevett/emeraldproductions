import { Language } from "../types";
import { wordLists } from "../wordlists";

export const getRandomCategory = (lang: Language) => {
  const wordList = wordLists[lang];
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
};
