import { useState } from "react";
import { useRecoilValue } from "recoil";

import { getRuin } from "../helpers";
import { ZoneCard } from "./ZoneCard";
import { selectEnvironment, selectRuin } from "../recoil";
import { Card } from "../data/createTheZone";

export const Ruin = () => {
  const hasRuin = useRecoilValue(selectRuin);
  const environment = useRecoilValue(selectEnvironment);

  const isSettlement = hasRuin === null;
  const [ruin, setRuin] = useState(getRuin(environment));

  const content = isSettlement
    ? "-"
    : hasRuin
    ? ruin
    : "This sector has no ruins.";

  return (
    <ZoneCard
      title={Card.RUIN}
      content={content}
      onChange={() => setRuin(getRuin(environment))}
    />
  );
};
