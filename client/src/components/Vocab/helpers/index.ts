import { Category, Language, List, Word } from "../types";
import { wordLists } from "../wordlists";

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

export const getRandomCategory = (lang: Language) => {
  const wordList = wordLists[lang];
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
};

export const getCategoryList = (lang: Language, category: Category["name"]) => {
  const languageArray = wordLists[lang];
  const index = languageArray.findIndex((e) => e.name === category);
  return languageArray[index].list;
};

export const flattenWordList = (list: List) => {
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

export const getLanguageName = (abbreviation: string) => {
  switch (abbreviation) {
    case "de":
      return "Deutsch";
    case "en":
      return "English";
    case "es":
      return "Español";
    case "fi":
      return "Suomea";
    case "fr":
      return "Français";
    case "it":
      return "Italiano";
    default:
      return "Unknown";
  }
};

export enum LanguageEnum {
  de = "Deutsch",
  en = "English",
  es = "Español",
  fi = "Suomea",
  fr = "Français",
  it = "Italiano",
  Unknown = "Unknown",
}
