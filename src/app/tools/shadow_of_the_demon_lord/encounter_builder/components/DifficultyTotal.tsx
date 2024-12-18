"use client";

import { useRecoilValue } from "recoil";

import { difficultyTotalSelector, levelSelector } from "../recoil";
import { getColor, getDanger } from "../utils";

export const DifficultyTotal = () => {
  const total = useRecoilValue(difficultyTotalSelector);
  const level = useRecoilValue(levelSelector);

  const range = getDanger(total, level);

  return (
    <span className={`text-2xl ${range && `text-${getColor(range)}-600`}`}>
      {total}
    </span>
  );
};
