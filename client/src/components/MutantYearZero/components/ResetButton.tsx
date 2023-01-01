import { EuiButton } from "@elastic/eui";
import { useRecoilCallback } from "recoil";
import { getMood, getRot, getSector, getThreat } from "../helpers";
import {
  threatAtom,
  moodAtom,
  sectorAtom,
  rotAtom,
  selectArtifacts,
} from "../recoil";

export const ResetButton = () => {
  const resetOptions = useRecoilCallback(
    ({ reset, set }) =>
      () => {
        set(moodAtom, getMood());
        set(rotAtom, getRot());
        set(sectorAtom, getSector());
        set(threatAtom, getThreat());
        reset(selectArtifacts);
      },
    []
  );

  return (
    <EuiButton color="primary" onClick={() => resetOptions()}>
      Create a Zone
    </EuiButton>
  );
};
