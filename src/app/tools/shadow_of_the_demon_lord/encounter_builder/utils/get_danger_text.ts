import { danger } from "@/data";
import { Level, Difficulty } from "../types";

export const getDangerText = (level: Level, difficulty: Difficulty) => {
  return danger[`${level}`][difficulty];
};
