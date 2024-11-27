import { useRecoilValue, useRecoilState } from "recoil";
import { RunType } from "@/data";
import { Heading, Slider } from "@/components";

import { nuyenModifierPercentAtom, runTypeAtom } from "../recoil";
import { getCostModifier } from "../helpers";

export const PercentModifierSlider = () => {
  const type = useRecoilValue(runTypeAtom);
  const [percent, setPercent] = useRecoilState(nuyenModifierPercentAtom);

  const description = () => {
    const text = (percent * 100).toFixed();
    switch (type.name) {
      case RunType.COLD:
        return `Run will make you a cold-hearted bastard +${text}%`;
      case RunType.GOOD:
        return `Run has good feelings as part of its reward ${text}%`;
      default:
        return "Standard run 0%";
    }
  };

  const onChange = (range: number) => {
    const percent = getCostModifier(type.name, range);
    setPercent(percent);
  };

  return (
    <div className="grid gap-4 w-fill">
      <Heading as="h4" className="text-center">
        Nuyen Percent Modifier
      </Heading>

      <Slider
        disabled={type.name === RunType.STANDARD}
        max={20}
        min={10}
        onValueChange={(value: number[]) => onChange(value[0])}
      />
      <p className="italic text-center">{description()}</p>
    </div>
  );
};
