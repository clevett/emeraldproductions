import { Language, List, Word } from "../types";
import { list } from "../wordlists";

const shuffle = (array: Word[]) => {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const getRandomCategory = (lang: Language = "fi-es") => {
  const wordList = list[lang];
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
};

export const getWordList = (list: List) => {
  let arr: Word[] = [];

  Object.entries(list).forEach(([key, value]) => {
    arr.push(key);
    arr.push(value);
  });

  return shuffle(arr);
};

export const getMatch = (word: string, list: List) => {
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

export const getCardDefault = (word: Word, list: List) => ({
  isMatched: false,
  isRevealed: false,
  match: getMatch(word, list),
  word,
});
