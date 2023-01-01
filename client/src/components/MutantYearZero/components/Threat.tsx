import { useRecoilValue, useRecoilState } from "recoil";

import { selectThreat, threatAtom } from "../recoil";
import { getThreat } from "../helpers";
import { ZoneCard } from "./ZoneCard";
import { Card } from "../data/createTheZone";

export const Threat = () => {
  const hasThreat = useRecoilValue(selectThreat);
  const [threat, setThreat] = useRecoilState(threatAtom);
  const content = hasThreat ? threat : "-";

  return (
    <ZoneCard
      title={Card.THREAT}
      content={content}
      onChange={() => setThreat(getThreat())}
    />
  );
};
