import { danger } from "@/data";
import { Danger, Level, MinMax } from "../types";
import { getMinMax } from "./get_min_max";

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
