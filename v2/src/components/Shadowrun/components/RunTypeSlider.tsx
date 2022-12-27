import {
  useGeneratedHtmlId,
  EuiFlexGroup,
  EuiTitle,
  EuiSpacer,
  EuiRange,
  EuiText,
} from "@elastic/eui";
import { useRecoilState } from "recoil";

import { Karma, types } from "../../../data/srRewards";
import { runTypeAtom } from "../recoil";

export const RunTypeSlider = () => {
  const [type, setType] = useRecoilState(runTypeAtom);

  const levels = [
    {
      min: Karma.STANDARD,
      max: Karma.GOOD,
      color: "success",
    },
    {
      min: Karma.COLD,
      max: Karma.STANDARD,
      color: "danger",
      "data-test-subj": "dangerColorLevel",
    },
  ];

  const rangeWithLevels = useGeneratedHtmlId({ prefix: "rangeWithLevels" });

  const onChange = (range: number) => {
    const run = types.find((t) => t.karma === range);
    if (run) {
      setType(run);
    }
  };

  return (
    <EuiFlexGroup
      className={`flex-col content-center flex-wrap w-fill`}
      gutterSize="l"
    >
      <EuiTitle className="text-center" size="s">
        <h5 id={rangeWithLevels}>Run Type</h5>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiRange
        aria-describedby={rangeWithLevels}
        aria-label="choose run type"
        id={rangeWithLevels}
        levels={levels}
        max={2}
        min={-2}
        onChange={(e) => onChange(parseInt(e.currentTarget.value))}
        showTicks
        showRange
        showValue
        fullWidth
        tickInterval={2}
        ticks={types.map((r) => ({ label: r.name, value: r.karma }))}
        value={type.karma}
      />
      <EuiSpacer size="m" />
      {type ? (
        <EuiText className="italic text-center">{type?.description}</EuiText>
      ) : null}
    </EuiFlexGroup>
  );
};
