import { Word } from "../types";
import list from "../wordlists/fi-es_color.json";

export const getWordList = () => {
  let arr: Word[] = [];

  Object.entries(list).forEach(([key, value]) => {
    arr.push(key);
    arr.push(value);
  });

  return arr;
};

export const getMatch = (word: string) => {
  for (const [key, value] of Object.entries(list)) {
    if (key === word) {
      return value;
    }

    if (value === word) {
      return key;
    }
  }

  console.error(`No match found for ${word}`);
  return undefined;
};

export const getCardDefault = (word: Word) => ({
  isMatched: false,
  isRevealed: false,
  match: getMatch(word),
  word,
});
