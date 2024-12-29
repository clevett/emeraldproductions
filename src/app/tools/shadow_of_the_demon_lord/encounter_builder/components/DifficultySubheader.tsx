"use client";

import { useRecoilValue } from "recoil";

import { levelSelector } from "../recoil";
import { Difficulty } from "../types";
import { getDangerText } from "../utils";

export const DifficultRange = ({ difficulty }: { difficulty: Difficulty }) => {
  const level = useRecoilValue(levelSelector);

  return <p className="text-center">{getDangerText(level, difficulty)}</p>;
};
