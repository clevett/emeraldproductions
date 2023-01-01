import { EuiButton } from "@elastic/eui";
import { useRecoilCallback, useRecoilValue } from "recoil";
import {
  getMood,
  getRot,
  getSector,
  getSectorRoll,
  getThreat,
} from "../helpers";
import {
  threatAtom,
  moodAtom,
  sectorAtom,
  rotAtom,
  threatLevelAtom,
  selectSectorRoll,
} from "../recoil";

export const ResetButton = () => {
  const threat = useRecoilValue(threatLevelAtom);

  const resetOptions = useRecoilCallback(
    ({ set }) =>
      () => {
        set(moodAtom, getMood());
        set(rotAtom, getRot());
        set(sectorAtom, getSector());
        set(threatAtom, getThreat());
        set(selectSectorRoll, getSectorRoll(`${threat}d6`));
      },
    []
  );

  return (
    <EuiButton color="primary" onClick={() => resetOptions()}>
      Create a Zone
    </EuiButton>
  );
};
