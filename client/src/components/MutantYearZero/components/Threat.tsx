import { useRecoilValue, useRecoilState } from "recoil";

import { selectSectorThreat, selectThreat, threatAtom } from "../recoil";
import { getThreat } from "../helpers";
import { ZoneCard } from "./ZoneCard";
import { Card } from "../data/createTheZone";

export const Threat = () => {
  const hasThreat = useRecoilValue(selectThreat);
  const count = useRecoilValue(selectSectorThreat);
  const [threat, setThreat] = useRecoilState(threatAtom);
  const content = hasThreat && count ? `${threat}, danger level ${count}` : "-";

  return (
    <ZoneCard
      title={Card.THREAT}
      content={content}
      onChange={() => setThreat(getThreat())}
    />
  );
};
