import { levels, danger } from "@/app/data";

import { typeChecker, levelsChecker } from "../recoil/refine";

export type Level = keyof typeof danger;

export const LevelSelect = ({
  level,
  onChange,
}: {
  level: Level;
  onChange: (arg: Level) => void;
}) => {
  return (
    <div className="grid grid-flow-col gap-4 items-center">
      <h5 className="capitalize text-center font-bold">Level</h5>
      <select
        className="capitalize px-4 py-2 rounded"
        onChange={(e) => {
          const result = typeChecker(levelsChecker(e.target.value));
          if (result) {
            onChange(result);
          }
        }}
        value={level}
      >
        {levels.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>
    </div>
  );
};
