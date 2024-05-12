import { List } from "../types";

export const getMatch = (word: string, list: List) => {
  const match = Object.entries(list).find(
    ([key, value]) => key === word || value === word
  );

  if (match) {
    const [key, value] = match;
    return key === word ? value : key;
  }

  console.error(`No match found for ${word}`);
  return undefined;
};
