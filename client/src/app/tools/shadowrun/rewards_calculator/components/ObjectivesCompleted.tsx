import { useRecoilState } from "recoil";

import { objectiveKarmaAtom } from "../recoil";

import { Heading, RadioCards } from "@/components";

export const ObjectivesCompleted = () => {
  const [karma, setKarma] = useRecoilState(objectiveKarmaAtom);

  const objectives = [
    { name: "None", value: 0 },
    { name: "Some", value: 1 },
    { name: "All", value: 2 },
  ];

  const onChange = (name: string) => {
    const objective = objectives.find((t) => t.name === name);
    if (objective) {
      setKarma(objective.value);
    }
  };

  const list = objectives.map(({ name, value }) => ({
    heading: name,
    description: `${value} karma`,
  }));

  return (
    <div className="grid gap-4 grid-rows-[min-content_1fr] w-full h-full max-w-2xl">
      <Heading as="h4" className="text-center">
        Group Completed Objectives
      </Heading>
      <RadioCards list={list} defaultValue="All" onChange={onChange} />
    </div>
  );
};
