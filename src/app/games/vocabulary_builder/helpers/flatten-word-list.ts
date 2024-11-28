import { List } from "../types";
import { shuffle } from "./shuffle";

export const flattenWordList = (list: List) => {
  const arr = [...Object.keys(list), ...Object.values(list)].flat();
  return shuffle(arr);
};
