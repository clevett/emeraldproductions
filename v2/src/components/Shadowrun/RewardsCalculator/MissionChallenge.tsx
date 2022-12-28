import {
  EuiFieldText,
  EuiFlexGroup,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { diceKarmaAtom } from "../RewardsCalculator/recoil";
import { getDicePoolKarma } from "./helpers";

export const MissionChallenge = () => {
  const [dice, setDice] = useState("14");
  const setKarma = useSetRecoilState(diceKarmaAtom);

  const onChange = (value: string) => {
    setDice(value);

    const num = parseInt(value);
    if (!isNaN(num)) {
      const bySix = getDicePoolKarma(num);
      setKarma(bySix);
    }
  };

  return (
    <EuiFlexGroup
      className="flex-col content-center flex-wrap w-fill"
      gutterSize="l"
    >
      <EuiTitle className="text-center" size="s">
        <h5>Highest Opposed Dicepool</h5>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiFieldText
        className="text-center"
        aria-label="Enter the highest opposed dice pool"
        onChange={(e) => onChange(e.target.value)}
        placeholder="14"
        value={dice}
      />
      <EuiSpacer size="m" />
      <EuiText className="italic text-center">
        This will be divided by six and rounded down.
      </EuiText>
    </EuiFlexGroup>
  );
};
