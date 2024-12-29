import { asType, CheckResult, stringLiterals } from "@recoiljs/refine";

import { danger } from "@/data";

import { Level } from "../types";
import { Levels, Difficulties } from "../enums";

export const difficultiesChecker = asType(
  stringLiterals({
    easy: Difficulties.EASY,
    average: Difficulties.AVERAGE,
    challenging: Difficulties.CHALLENGING,
    hard: Difficulties.HARD,
    max: Difficulties.MAX,
  }),
  (s) => s as keyof typeof danger.starting
);

export const dangerChecker = asType(
  stringLiterals({
    starting: Levels.STARTING,
    novice: Levels.NOVICE,
    expert: Levels.EXPERT,
    master: Levels.MASTER,
  }),
  (s) => s as keyof typeof danger
);

export const levelsChecker = asType(dangerChecker, (s: Level) => s);

export const typeChecker = <T>(checker: CheckResult<T>) => {
  if (checker.type === "success") {
    return checker.value;
  } else {
    return undefined;
  }
};
