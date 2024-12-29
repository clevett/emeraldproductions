import { asType, CheckResult, stringLiterals } from "@recoiljs/refine";

import { danger } from "@/data";

import { Level } from "../types";
import { Levels } from "../enums";

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
