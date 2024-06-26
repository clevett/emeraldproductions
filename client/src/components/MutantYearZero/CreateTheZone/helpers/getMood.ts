import { getRandomArrayElement } from "../../../../helpers";
import { moods } from "../data/mood";
import { getD66 } from "./getD66";

export const getMood = () => {
  const result = getD66();
  const mood =
    moods.find((e) => e.result.includes(result)) ??
    getRandomArrayElement(moods);
  return `${mood.name}. ${mood.description}`;
};
