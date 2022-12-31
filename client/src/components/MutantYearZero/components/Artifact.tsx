import { ZoneCard } from "./ZoneCard";

export const Artifact = ({ hasArtifact }: { hasArtifact: boolean | null }) => {
  const content = hasArtifact ? "" : "This sector has no artifacts.";
  return <ZoneCard title="Artifact" content={content} />;
};
