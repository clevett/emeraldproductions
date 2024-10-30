import { useRecoilState, useSetRecoilState } from "recoil";

import { Heading, RadioCards } from "@/app/components";
import { types, RunType as Runs } from "@/app/data";

import { nuyenModifierPercentAtom, runTypeAtom } from "../recoil";
import { getCostModifier } from "../helpers";

export const RunType = () => {
  const [type, setType] = useRecoilState(runTypeAtom);
  const setPercent = useSetRecoilState(nuyenModifierPercentAtom);

  const onChange = (name: string) => {
    const run = types.find((t) => t.name === name);
    if (run) {
      setType(run);
      const percent = getCostModifier(run.name);
      setPercent(percent);
    }
  };

  const getDescription = (str: string) =>
    str === Runs.COLD
      ? "(-2 karma, +10% nuyen)"
      : str === Runs.GOOD
      ? "(+2 karma, -10% nuyen)"
      : "Nothing special";

  const list = types.map(({ name }) => ({
    heading: name,
    description: `${getDescription(name)}`,
  }));

  return (
    <div className="grid gap-4 grid-rows-[min-content_1fr] w-full h-full max-w-2xl">
      <Heading as="h4" className="text-center">
        Run Type
      </Heading>
      <RadioCards list={list} defaultValue={type.name} onChange={onChange} />
    </div>
  );
};
