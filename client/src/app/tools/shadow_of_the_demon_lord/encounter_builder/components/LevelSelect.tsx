"use client";
import { levels } from "@/app/data";
import { Select } from "@/app/components";

import { typeChecker, levelsChecker } from "../recoil/refine";
import { Level } from "../types";

export const LevelSelect = ({
  level,
  onChange,
}: {
  level: Level;
  onChange: (arg: Level) => void;
}) => {
  return (
    <Select
      title="Level"
      onChange={(e) => {
        const result = typeChecker(levelsChecker(e));
        if (result) {
          onChange(result);
        }
      }}
      list={levels}
      defaultValue={level[0]}
    />
  );
};
