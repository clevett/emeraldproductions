import {
  useGeneratedHtmlId,
  EuiTitle,
  EuiSpacer,
  EuiRange,
  EuiText,
} from "@elastic/eui";
import { useRecoilState, useSetRecoilState } from "recoil";

import { types } from "./data/srRewards";
import { capitalize } from "../../helpers";
import {
  nuyenModifierPercentAtom,
  runTypeAtom,
} from "../RewardsCalculator/recoil";
import { getCostModifier } from "./helpers";

import styles from "../styles.module.css";

export const RunTypeSlider = () => {
  const [type, setType] = useRecoilState(runTypeAtom);
  const setPercent = useSetRecoilState(nuyenModifierPercentAtom);

  const rangeWithLevels = useGeneratedHtmlId({ prefix: "rangeWithLevels" });

  const onChange = (range: number) => {
    const run = types.find((t) => t.karma === range);
    if (run) {
      setType(run);
      const percent = getCostModifier(run.name, 10);
      setPercent(percent);
    }
  };

  return (
    <div className={`grid w-fill`}>
      <EuiTitle className="text-center" size="s">
        <h5 id={rangeWithLevels}>Run Type</h5>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiRange
        className={`${styles.borderBlack}`}
        aria-describedby={rangeWithLevels}
        aria-label="choose run type"
        id={rangeWithLevels}
        max={2}
        min={-2}
        onChange={(e) => onChange(parseInt(e.currentTarget.value))}
        showTicks
        showRange
        showValue
        fullWidth
        tickInterval={2}
        ticks={types.map((r) => ({
          label: capitalize(r.name),
          value: r.karma,
        }))}
        value={type.karma}
      />
      <EuiSpacer size="m" />
      {type ? (
        <EuiText className="italic text-center">{type?.description}</EuiText>
      ) : null}
    </div>
  );
};
