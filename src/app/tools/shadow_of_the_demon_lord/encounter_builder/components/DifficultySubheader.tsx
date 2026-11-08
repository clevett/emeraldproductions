"use client";

import { useAtomValue } from "jotai";

import { levelSelector } from "../state";
import { Difficulty } from "../types";
import { getDangerText } from "../utils";

export const DifficultRange = ({ difficulty }: { difficulty: Difficulty }) => {
  const level = useAtomValue(levelSelector);

  return <p className="text-center">{getDangerText(level, difficulty)}</p>;
};
