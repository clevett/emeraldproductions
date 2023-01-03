import { getRandomArrayElement } from "../../../../helpers";
import { rotLevels } from "../data/createTheZone";
import { getD66 } from "./getD66";

export const getRot = () => {
  const result = getD66();
  const rot =
    rotLevels.find((e) => e.result.includes(result)) ??
    getRandomArrayElement(rotLevels);
  return `Level ${rot.value}, ${rot.name}, ${rot.description}`;
};
