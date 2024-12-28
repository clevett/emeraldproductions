"use client";

import { useRecoilValue } from "recoil";

import { difficultyTotalSelector, levelSelector } from "../recoil";
import { getColor, getDanger } from "../utils";

export const DifficultyTotal = () => {
  const total = useRecoilValue(difficultyTotalSelector);
  const level = useRecoilValue(levelSelector);

  const range = getDanger(total, level);

  return (
    <>
      This encounter is{" "}
      <span className={`${range && `text-${getColor(range)}-600`}`}>
        {range}
      </span>{" "}
      for {level} level with total difficulty of{" "}
      <span className={`${range && `text-${getColor(range)}-600`}`}>
        {total}
      </span>
    </>
  );
};
