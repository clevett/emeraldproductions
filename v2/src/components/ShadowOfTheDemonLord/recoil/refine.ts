import {
  CheckResult,
  asType,
  stringLiterals,
  object,
  string,
  number,
  nullable,
  union,
  array,
} from "@recoiljs/refine";
import { danger } from "../../../data/sotdlDangerLevels";
import { pace, terrain, threat, weather } from "../../../data/sotdlTravel";

export const difficultiesChecker = asType(
  stringLiterals({
    easy: "easy",
    average: "average",
    challenging: "challenging",
    hard: "hard",
    max: "max",
  }),
  (s) => s as keyof typeof danger.starting
);

export const levelsChecker = asType(
  stringLiterals({
    starting: "starting",
    novice: "novice",
    expert: "expert",
    master: "master",
  }),
  (s) => s as keyof typeof danger
);

export const threatChecker = asType(
  object({
    frequency: string(),
    name: string(),
  }),
  (s) => s as typeof threat[number]
);

export const terrainChecker = asType(
  object({
    multiplier: number(),
    name: string(),
  }),
  (s) => s as typeof terrain[number]
);

export const weatherChecker = asType(
  object({
    multiplier: number(),
    name: string(),
    result: array(number()),
  }),
  (s) => s as typeof weather[number]
);

export const paceChecker = asType(
  object({
    day: nullable(number()),
    hour: number(),
    name: string(),
  }),
  (s) => s as typeof pace[number]
);

export const travelChecker = union(paceChecker, terrainChecker);

export const typeChecker = <T>(checker: CheckResult<T>) => {
  if (checker.type === "success") {
    return checker.value;
  } else {
    return undefined;
  }
};
