import { useRecoilValue, useRecoilState } from "recoil";

import { ZoneCard } from "./ZoneCard";
import {
  selectArtifact,
  selectArtifactCount,
  sectorArtifactAtom,
} from "../recoil";
import { Card } from "../data/createTheZone";
import { getArtifacts } from "../helpers/getArtifacts";

export const Artifact = () => {
  const [artifacts, setArtifacts] = useRecoilState(sectorArtifactAtom);
  const count = useRecoilValue(selectArtifactCount);
  const hasArtifact = useRecoilValue(selectArtifact);
  const isSettlement = hasArtifact === null;

  const content = isSettlement
    ? "-"
    : hasArtifact && artifacts.length > 0
    ? `The number of artifacts here is ${count}, ${artifacts.join(`, `)}. `
    : "This sector has no artifacts.";

  return (
    <ZoneCard
      title={Card.ARTIFACT}
      content={content}
      onChange={() => setArtifacts(getArtifacts(count))}
    />
  );
};
