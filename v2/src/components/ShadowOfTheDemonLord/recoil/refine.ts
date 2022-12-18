import { CheckResult, asType, stringLiterals } from "@recoiljs/refine";
import { danger } from "../../../data/sotdlDangerLevels";

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

export const typeChecker = <T>(checker: CheckResult<T>) => {
  if (checker.type === "success") {
    return checker.value;
  } else {
    return undefined;
  }
};
