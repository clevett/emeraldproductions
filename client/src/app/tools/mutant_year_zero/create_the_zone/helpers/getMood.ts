import { getD66 } from "./getD66";
import { getRandomArrayElement } from "@/utils";
import { moods } from "../../../../../data/myz_moods";

export const getMood = () => {
  const result = getD66();
  const mood =
    moods.find((e) => e.result.includes(result)) ??
    getRandomArrayElement(moods);
  return `${mood.name}. ${mood.description}`;
};
