import { getRandomArrayElement } from "../../../helpers";
import { Environment, Environments } from "../data/createTheZone";
import { industryRuins, normalRuins } from "../data/ruins";
import { getD66 } from "./getD66";

export const getRuin = (environment: Environment) => {
  const isIndustry = environment === Environments.DERELICT_INDUSTRIES;
  const ruins = isIndustry ? industryRuins : normalRuins;
  const result = getD66();
  const ruin = ruins.find((e) => e.result.includes(result));
  return ruin ? ruin.environment : getRandomArrayElement(ruins).environment;
};
