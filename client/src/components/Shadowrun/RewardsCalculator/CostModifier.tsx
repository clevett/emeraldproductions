import {
  EuiTitle,
  EuiSpacer,
  EuiRange,
  EuiText,
  useGeneratedHtmlId,
} from "@elastic/eui";
import { useRecoilValue, useRecoilState } from "recoil";
import { RunType } from "./data/srRewards";
import { nuyenModifierPercentAtom, runTypeAtom } from "./recoil";

import styles from "../styles.module.css";
import { getCostModifier } from "./helpers";

export const CostModifier = () => {
  const type = useRecoilValue(runTypeAtom);
  const [percent, setPercent] = useRecoilState(nuyenModifierPercentAtom);

  const costModifierSlider = useGeneratedHtmlId({
    prefix: "codModifierSlider",
  });

  const description = () => {
    switch (type.name) {
      case RunType.COLD:
        return "Run will make you a cold-hearted bastard +10-20%";
      case RunType.GOOD:
        return "Run has good feelings as part of its reward –10-20%";
      default:
        return "Standard run 0%";
    }
  };

  const onChange = (range: number) => {
    const percent = getCostModifier(type.name, range);
    setPercent(percent);
  };

  return (
    <div className={`grid w-fill ${styles.minW360}`}>
      <EuiTitle className="text-center" size="s">
        <h5 id={costModifierSlider}>Nuyen Modifiers</h5>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiRange
        aria-describedby={costModifierSlider}
        aria-label="choose run type"
        disabled={type.name === RunType.STANDARD}
        fullWidth
        id={costModifierSlider}
        max={20}
        min={10}
        onChange={(e) => onChange(parseInt(e.currentTarget.value))}
        showRange
        showTicks
        showValue
        tickInterval={1}
        value={Math.abs(percent * 100)}
      />
      <EuiSpacer size="m" />
      <EuiText className="italic text-center">{description()}</EuiText>
    </div>
  );
};
