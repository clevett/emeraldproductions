import { Heading, Select } from "@/app/components";
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
        title="Level"
        className="px-4 py-2 rounded capitalize"
        onChange={handleChange}
        defaultValue={level}
        list={levels.map((l) => l.toString())}
      />
    </div>
  );
};
