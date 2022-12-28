import {
  useGeneratedHtmlId,
  EuiTitle,
  EuiSpacer,
  EuiRange,
  EuiText,
} from "@elastic/eui";
import { useRecoilState } from "recoil";

import { types } from "./data/srRewards";
import { capitalize } from "../../helpers";
import { runTypeAtom } from "../RewardsCalculator/recoil";

export const RunTypeSlider = () => {
  const [type, setType] = useRecoilState(runTypeAtom);

  const rangeWithLevels = useGeneratedHtmlId({ prefix: "rangeWithLevels" });

  const onChange = (range: number) => {
    const run = types.find((t) => t.karma === range);
    if (run) {
      setType(run);
    }
  };

  return (
    <div className={`grid w-fill`}>
      <EuiTitle className="text-center" size="s">
        <h5 id={rangeWithLevels}>Run Type</h5>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiRange
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
