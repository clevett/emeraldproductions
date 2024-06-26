import { EuiSelect } from "@elastic/eui";
import { typeChecker, levelsChecker } from "../recoil/refine";
import { SmallTitle } from "./SmallTitle";
import { levels, danger } from "../../../data";

export type Level = keyof typeof danger;

export const LevelSelect = ({
  level,
  onChange,
}: {
  level: Level;
  onChange: (arg: Level) => void;
}) => {
  return (
    <>
      <SmallTitle name="level" />
      <EuiSelect
        className="capitalize"
        onChange={(e) => {
          const result = typeChecker(levelsChecker(e.target.value));
          if (result) {
            onChange(result);
          }
        }}
        options={levels.map((l) => ({ text: l, name: l }))}
        value={level}
      />
    </>
  );
};
