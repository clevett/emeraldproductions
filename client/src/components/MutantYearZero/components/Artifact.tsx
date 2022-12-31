import { useRecoilValue, useRecoilState } from "recoil";

import { ZoneCard } from "./ZoneCard";
import { artifactAtom, selectArtifact } from "../recoil";
import { getD666 } from "../helpers";
export const Artifact = () => {
  const hasArtifact = useRecoilValue(selectArtifact);
  const [artifact, setArtifact] = useRecoilState(artifactAtom);
  const isSettlement = hasArtifact === null;
  const content = isSettlement
    ? "-"
    : hasArtifact
    ? `${artifact}`
    : "This sector has no artifacts.";
  return (
    <ZoneCard
      title="Artifact"
      content={content}
      onChange={() => setArtifact(getD666())}
    />
  );
};
