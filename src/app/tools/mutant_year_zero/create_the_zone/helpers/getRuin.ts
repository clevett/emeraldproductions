import { getRandomArrayElement } from "@/app/tools/utils";

import {
  Environment,
  Environments,
} from "../../../../../data/myz_environments";
import { getD66 } from "./getD66";
import { industryRuins, normalRuins } from "../../../../../data/myz_ruins";

export const getRuin = (environment: Environment) => {
  const isIndustry = environment === Environments.DERELICT_INDUSTRIES;
  const ruins = isIndustry ? industryRuins : normalRuins;
  const result = getD66();
  const ruin = ruins.find((e) => e.result.includes(result));
  return ruin ? ruin.environment : getRandomArrayElement(ruins).environment;
};
