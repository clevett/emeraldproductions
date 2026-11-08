import { useAtom } from "jotai";

import { Input } from "@/components";

import { threatLevelAtom } from "../state";

export const ThreatLevel = () => {
  const [base, setBase] = useAtom(threatLevelAtom);

  return (
    <Input
      defaultValue={`${base}`}
      label="Enter threat level"
      max={20}
      min={1}
      placeholder="2"
      styles="text-center"
      submit={(value: string) => setBase(parseInt(value))}
    />
  );
};
