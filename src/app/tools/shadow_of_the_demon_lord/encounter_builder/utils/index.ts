import { danger } from "@/data";

import { Difficulties as DifficultyEnum } from "../enums";
import { Difficulty, Level, Danger } from "../types";

export const getColor = (key: Difficulty) => {
  switch (key) {
    case DifficultyEnum.EASY:
      return "green";
    case DifficultyEnum.AVERAGE:
      return "amber";
    case DifficultyEnum.CHALLENGING:
      return "orange";
    case DifficultyEnum.HARD:
      return "red";
    default:
      return "";
  }
};

const less = " or less";
const more = " or more";
const dash = "-";

const getMoreLess = (s: string, key: typeof less | typeof more) =>
  s.split(key)[0];
const getDash = (string: string) => string.split(dash);

type MinMax = { min: number; max: number | null };

export const getMinMax = (range: string) => {
  const hasLess = range.includes(less);
  const hasDash = range.includes(dash);
  const hasMore = range.includes(more);

  if (hasLess) {
    return {
      min: 0,
      max: parseInt(getMoreLess(range, less)),
    };
  }

  if (hasDash) {
    return {
      min: parseInt(getDash(range)[0]),
      max: parseInt(getDash(range)[1]),
    };
  }

  if (hasMore) {
    return {
      min: parseInt(getMoreLess(range, more)),
      max: null,
    };
  }
};

export const getDangerRanges = (level: Level) => {
  const object: { [key: string]: MinMax } = {};
  const keys = Object.keys(danger[level]) as (keyof Danger)[];

  keys.forEach((e) => {
    const range = getMinMax(danger[level][e]);
    if (range) {
      object[`${e}`] = range;
    }
  });

  return object;
};
export const getDanger = (total: number, level: Level) => {
  const ranges = getDangerRanges(level);
  const keys = Object.keys(ranges) as (keyof Danger)[];
  const checkMinMax = (r: MinMax) => r.max && total >= r.min && total <= r.max;
  const range = keys.find((e) =>
    ranges[e].max ? checkMinMax(ranges[e]) : total >= ranges[e].min
  );
  return range;
};
