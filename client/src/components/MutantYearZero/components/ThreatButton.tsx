import { EuiButton } from "@elastic/eui";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { getSectorRoll } from "../helpers";
import { useRefreshArtifacts } from "../hook/useRefreshArtifacts";
import { selectSectorRoll, threatLevelAtom } from "../recoil";

export const ThreatButton = () => {
  const threatLevel = useRecoilValue(threatLevelAtom);
  const setSectorRoll = useSetRecoilState(selectSectorRoll);
  const refreshArtifacts = useRefreshArtifacts();

  const onClick = () => {
    const roll = getSectorRoll(`${threatLevel}d6`);
    setSectorRoll(roll);

    refreshArtifacts(roll);
  };

  return (
    <EuiButton color="primary" onClick={onClick}>
      Enter Sector Roll
    </EuiButton>
  );
};
