import { EuiButton } from "@elastic/eui";
import { useRecoilCallback } from "recoil";
import { getD666, getMood, getRot, getSector, getThreat } from "../helpers";
import {
  threatAtom,
  artifactAtom,
  moodAtom,
  sectorAtom,
  rotAtom,
} from "../recoil";

export const ResetButton = () => {
  const resetOptions = useRecoilCallback(
    ({ set }) =>
      () => {
        set(artifactAtom, getD666());
        set(moodAtom, getMood());
        set(rotAtom, getRot());
        set(sectorAtom, getSector());
        set(threatAtom, getThreat());
      },
    []
  );

  return (
    <EuiButton color="primary" onClick={() => resetOptions()}>
      Create a new zone
    </EuiButton>
  );
};
