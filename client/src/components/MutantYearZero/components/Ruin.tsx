import { useState } from "react";
import { Environment } from "../data/createTheZone";
import { getRuin } from "../helpers";
import { ZoneCard } from "./ZoneCard";

export const Ruin = ({
  environment,
  hasRuin,
}: {
  environment: Environment;
  hasRuin: boolean | null;
}) => {
  const [ruin, setRuin] = useState(getRuin(environment));
  const content = hasRuin ? ruin : "This sector has no ruins.";
  return (
    <ZoneCard
      title="Ruin"
      content={content}
      onChange={() => setRuin(getRuin(environment))}
    />
  );
};
