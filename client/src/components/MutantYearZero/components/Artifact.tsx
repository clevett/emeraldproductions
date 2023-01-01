import { useRecoilValue, useRecoilState } from "recoil";

import { ZoneCard } from "./ZoneCard";
import {
  selectArtifact,
  selectArtifactCount,
  selectArtifacts,
} from "../recoil";
import { Card } from "../data/createTheZone";
import { getArtifacts } from "../helpers/getArtifacts";

export const Artifact = () => {
  const hasArtifact = useRecoilValue(selectArtifact);
  const count = useRecoilValue(selectArtifactCount);
  const [artifacts, setArtifacts] = useRecoilState(selectArtifacts);
  const isSettlement = hasArtifact === null;
  const content = isSettlement
    ? "-"
    : hasArtifact && artifacts.length > 0
    ? `Artifacts here ${artifacts.join(`, `)}. `
    : "This sector has no artifacts.";

  return (
    <ZoneCard
      title={Card.ARTIFACT}
      content={content}
      onChange={() => setArtifacts(getArtifacts(count))}
    />
  );
};
