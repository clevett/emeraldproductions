import { Level, Danger, MinMax } from "../types";
import { getDangerRanges } from "./get_danger_ranges";

export const getDanger = (total: number, level: Level) => {
  const ranges = getDangerRanges(level);
  const keys = Object.keys(ranges) as (keyof Danger)[];
  const checkMinMax = (r: MinMax) => r.max && total >= r.min && total <= r.max;
  const range = keys.find((e) =>
    ranges[e].max ? checkMinMax(ranges[e]) : total >= ranges[e].min
  );
  return range;
};
