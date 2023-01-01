import { EuiButton } from "@elastic/eui";
import { useRecoilCallback } from "recoil";
import { getMood, getRot, getSector, getThreat } from "../helpers";
import { threatAtom, moodAtom, sectorAtom, rotAtom } from "../recoil";

export const ResetButton = () => {
  const resetOptions = useRecoilCallback(
    ({ set }) =>
      () => {
        set(moodAtom, getMood());
        set(rotAtom, getRot());
        set(sectorAtom, getSector());
        set(threatAtom, getThreat());
      },
    []
  );

  return (
    <EuiButton color="primary" onClick={() => resetOptions()}>
      Create a Zone
    </EuiButton>
  );
};
