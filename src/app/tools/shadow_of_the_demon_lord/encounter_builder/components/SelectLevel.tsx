"use client";
import { useAtom } from "jotai";

import { Select } from "@/components";
import { levels } from "@/data";

import { typeChecker, levelsChecker, levelSelector } from "../state";

export const SelectLevel = () => {
  const [level, setLevel] = useAtom(levelSelector);

  return (
    <Select
      className="w-min"
      defaultValue={level}
      list={levels}
      onChange={(e) => {
        const result = typeChecker(levelsChecker(e));
        if (result) {
          setLevel(result);
        }
      }}
      title="Level"
    />
  );
};
