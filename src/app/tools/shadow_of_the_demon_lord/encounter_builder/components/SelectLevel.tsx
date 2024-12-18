"use client";
import { useRecoilState } from "recoil";

import { Select } from "@/components";
import { levels } from "@/data";

import { typeChecker, levelsChecker, levelSelector } from "../recoil";

export const SelectLevel = () => {
  const [level, setLevel] = useRecoilState(levelSelector);

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
