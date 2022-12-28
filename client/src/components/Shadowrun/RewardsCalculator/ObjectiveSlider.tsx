import {
  useGeneratedHtmlId,
  EuiTitle,
  EuiSpacer,
  EuiRange,
} from "@elastic/eui";
import { useRecoilState } from "recoil";

import { capitalize } from "../../helpers";
import { objectiveKarmaAtom } from "../RewardsCalculator/recoil";

export const ObjectiveSlider = () => {
  const [karma, setKarma] = useRecoilState(objectiveKarmaAtom);

  const groupRangeWithLevels = useGeneratedHtmlId({
    prefix: "groupRangeWithLevels",
  });

  const onChange = (range: number) => setKarma(range);

  const karmaObjectives = [
    { label: "none", value: 0 },
    { label: "some", value: 1 },
    { label: "all", value: 2 },
  ];

  return (
    <div className={`grid w-fill`}>
      <EuiTitle className="text-center" size="s">
        <h5 id={groupRangeWithLevels}>Group Completed Objectives</h5>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiRange
        aria-describedby={groupRangeWithLevels}
        aria-label="choose run type"
        id={groupRangeWithLevels}
        max={2}
        min={0}
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
        value={karma}
      />
      <EuiSpacer size="m" />
    </div>
  );
};
