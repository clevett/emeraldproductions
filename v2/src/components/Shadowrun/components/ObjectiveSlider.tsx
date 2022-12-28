import {
  useGeneratedHtmlId,
  EuiFlexGroup,
  EuiTitle,
  EuiSpacer,
  EuiRange,
  EuiText,
} from "@elastic/eui";
import { useRecoilState } from "recoil";

import { types } from "../../../data/srRewards";
import { capitalize } from "../../helpers";
import { runTypeAtom } from "../recoil";

export const ObjectiveSlider = () => {
  const [type, setType] = useRecoilState(runTypeAtom);

  const groupRangeWithLevels = useGeneratedHtmlId({
    prefix: "groupRangeWithLevels",
  });

  const onChange = (range: number) => {
    const run = types.find((t) => t.karma === range);
    if (run) {
      setType(run);
    }
  };

  const karmaObjectives = [
    { label: "none", value: 0 },
    { label: "some", value: 1 },
    { label: "all", value: 2 },
  ];

  return (
    <EuiFlexGroup
      className={`flex-col content-center flex-wrap w-fill`}
      gutterSize="l"
    >
      <EuiTitle className="text-center" size="s">
        <h5 id={groupRangeWithLevels}>Group Completed Objectives</h5>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiRange
        aria-describedby={groupRangeWithLevels}
        aria-label="choose run type"
        id={groupRangeWithLevels}
        max={0}
        min={2}
        onChange={(e) => onChange(parseInt(e.currentTarget.value))}
        showTicks
        showRange
        showValue
        fullWidth
        tickInterval={1}
        ticks={karmaObjectives.map(({ label, value }) => ({
          label: capitalize(label),
          value,
        }))}
        value={type.karma}
      />
      <EuiSpacer size="m" />
      {type ? (
        <EuiText className="italic text-center">{type?.description}</EuiText>
      ) : null}
    </EuiFlexGroup>
  );
};
