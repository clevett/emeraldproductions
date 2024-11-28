import { Language } from "../types";
import { wordLists } from "../../../../client_backup/src/components/Vocab/wordlists";

export const getRandomCategory = (lang: Language) => {
  const wordList = wordLists[lang];
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
};
