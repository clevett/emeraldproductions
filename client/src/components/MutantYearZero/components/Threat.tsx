import { useState } from "react";
import { getThreat } from "../helpers";
import { ZoneCard } from "./ZoneCard";

export const Threat = ({ hasThreat }: { hasThreat: boolean | null }) => {
  const [threat, setThreat] = useState(getThreat());
  const content = hasThreat ? threat : "-";
  return (
    <ZoneCard
      title="Threat"
      content={content}
      onChange={() => setThreat(getThreat())}
    />
  );
};
