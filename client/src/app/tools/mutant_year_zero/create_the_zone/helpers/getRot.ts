import { getRandomArrayElement } from "@/app/tools/utils";
import { rotLevels } from "../../../../data/myz_create_the_zone";
import { getD66 } from "./getD66";

export const getRot = () => {
  const result = getD66();
  const rot =
    rotLevels.find((e) => e.result.includes(result)) ??
    getRandomArrayElement(rotLevels);
  return `Level ${rot.value}, ${rot.name}, ${rot.description}`;
};
