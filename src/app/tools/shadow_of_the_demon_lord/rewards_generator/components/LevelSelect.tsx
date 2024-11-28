import { Heading, Select } from "@/components";
import { levels, danger } from "@/data";

import { typeChecker, levelsChecker } from "../recoil/refine";

export type Level = keyof typeof danger;

export const LevelSelect = ({
  level,
  onChange,
}: {
  level: Level;
  onChange: (arg: Level) => void;
}) => {
  const handleChange = (value: string) => {
    const result = typeChecker(levelsChecker(value));
    if (result) {
      onChange(result);
    }
  };

  return (
    <div className="grid grid-flow-col gap-4 items-center">
      <Heading as="h5" className="capitalize text-center">
        Level
      </Heading>
      <Select
        className="px-4 py-2 rounded capitalize"
        defaultValue={level}
        list={levels.map((l) => l.toString())}
        onChange={handleChange}
        title="Level"
      />
    </div>
  );
};
