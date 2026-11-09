"use client";

import { useAtomValue } from "jotai";

import { difficultyTotalSelector, levelSelector } from "../state";
import { getColor, getDanger } from "../utils";

export const DifficultyTotal = () => {
  const total = useAtomValue(difficultyTotalSelector);
  const level = useAtomValue(levelSelector);

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
