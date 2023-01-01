import { useRecoilValue } from "recoil";
import { useState } from "react";

import { ZoneCard } from "./ZoneCard";
import { selectArtifact, selectArtifactCount } from "../recoil";
import { Card } from "../data/createTheZone";
import { getArtifacts } from "../helpers/getArtifacts";

export const Artifact = () => {
  const hasArtifact = useRecoilValue(selectArtifact);
  const count = useRecoilValue(selectArtifactCount);
  const [artifact, setArtifact] = useState(getArtifacts(count));

  const isSettlement = hasArtifact === null;

  const content = isSettlement
    ? "-"
    : hasArtifact && count
    ? `Artifacts here ${artifact.join(`, `)}. `
    : "This sector has no artifacts.";

  return (
    <ZoneCard
      title={Card.ARTIFACT}
      content={content}
      onChange={() => setArtifact(getArtifacts(count))}
    />
  );
};
