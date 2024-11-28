import { useRecoilState } from "recoil";

import { Input } from "@/components";

import { threatLevelAtom } from "../recoil";

export const ThreatLevel = () => {
  const [base, setBase] = useRecoilState(threatLevelAtom);

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
