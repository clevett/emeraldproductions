import { getRandomArrayElement } from "../../../helpers";
import { sectorEnvironments } from "../data/createTheZone";
import { getD66 } from "./getD66";

export const getSector = () => {
  const result = getD66();
  const sector = sectorEnvironments.find((e) => e.result.includes(result));
  return sector ? sector : getRandomArrayElement(sectorEnvironments);
};
