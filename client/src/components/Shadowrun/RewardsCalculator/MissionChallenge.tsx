import { EuiFieldText, EuiSpacer, EuiTitle } from "@elastic/eui";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  diceKarmaAtom,
  diceNuyenAtom,
  opposedDicePoolAtom,
} from "../RewardsCalculator/recoil";
import { getDicePoolKarma, getDicePoolNuyen } from "./helpers";

export const MissionChallenge = () => {
  const [value, setValue] = useState("14");
  const [dice, setDice] = useRecoilState(opposedDicePoolAtom);
  const setKarma = useSetRecoilState(diceKarmaAtom);
  const setNuyen = useSetRecoilState(diceNuyenAtom);

  useEffect(() => setValue(`${dice}`), [dice]);

  const onBlur = () => {
    const num = parseInt(value);
    if (isNaN(num)) {
      setValue(`${dice}`);
    } else {
      setDice(num);
      setKarma(getDicePoolKarma(num));
      setNuyen(getDicePoolNuyen(num));
    }
  };

  return (
    <div className="grid w-fill justify-center content-center">
      <EuiTitle className="text-center" size="s">
        <h5>Highest Opposing Dice Pool</h5>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiFieldText
        onBlur={onBlur}
        className="text-center"
        aria-label="Enter the highest opposed dice pool"
        onChange={(e) => setValue(e.target.value)}
        placeholder="14"
        value={value}
      />
    </div>
  );
};
