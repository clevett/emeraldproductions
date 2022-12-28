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

export const CostModifier = () => {
  const type = useRecoilValue(runTypeAtom);
  const [percent, setPercent] = useRecoilState(nuyenModifierPercentAtom);

  const costModifierSlider = useGeneratedHtmlId({
    prefix: "codModifierSlider",
  });

  const description = () => {
    switch (type.name) {
      case RunType.COLD:
        return "Run type set to cold-hearted.";
      case RunType.GOOD:
        return "Run type set to good feels.";
      default:
        return "Standard runs do not have a bonus.";
    }
  };

  const onChange = (range: number) => {
    const getPercent = () => {
      const decimal = range / 100;
      switch (type.name) {
        case RunType.COLD:
          return decimal;
        case RunType.GOOD:
          return -decimal;
        default:
          return 0;
      }
    };
    setPercent(getPercent());
  };

  return (
    <div className={`grid w-fill`}>
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
