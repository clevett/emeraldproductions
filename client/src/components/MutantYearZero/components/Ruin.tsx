import { Environment } from "../data/createTheZone";
import { getRuin } from "../helpers";
import { ZoneCard } from "./ZoneCard";

export const Ruin = ({ environment }: { environment: Environment }) => {
  const ruin = getRuin(environment);
  return <ZoneCard title="Ruin" content={ruin} />;
};
