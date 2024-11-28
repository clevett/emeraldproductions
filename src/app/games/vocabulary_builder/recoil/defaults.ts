import { getRandomCategory, getMatch } from "../helpers";
import { Word, List } from "../types";

export const defaultLanguage = "fi-es";
export const defaultCategory = getRandomCategory(defaultLanguage);

export const getCardDefault = (word: Word, list: List) => ({
  isMatched: false,
  isRevealed: false,
  match: getMatch(word, list),
  word,
});
