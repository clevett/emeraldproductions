import { EuiButton } from "@elastic/eui";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { getSectorRoll } from "../helpers";
import { sectorRollAtom, threatLevelAtom } from "../recoil";

export const ThreatButton = () => {
  const threatLevel = useRecoilValue(threatLevelAtom);
  const setSectorRoll = useSetRecoilState(sectorRollAtom);
  return (
    <EuiButton
      color="primary"
      onClick={() => setSectorRoll(getSectorRoll(`${threatLevel}d6`))}
    >
      Enter Sector Roll
    </EuiButton>
  );
};
