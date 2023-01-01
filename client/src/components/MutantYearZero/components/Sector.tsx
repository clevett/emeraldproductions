import { useRecoilState } from "recoil";
import { FlexColGroup } from "../../Styled/FlexColGroup";
import { Card } from "../data/createTheZone";
import { getSector } from "../helpers";
import { sectorAtom } from "../recoil";
import { Artifact } from "./Artifact";
import { Mood } from "./Mood";
import { ResetButton } from "./ResetButton";
import { Rot } from "./Rot";
import { Ruin } from "./Ruin";
import { Threat } from "./Threat";
import { ZoneCard } from "./ZoneCard";

import styles from "../styles.module.css";
import { ThreatInput } from "./ThreatInput";
import { ThreatButton } from "./ThreatButton";

export const Sector = () => {
  const [sector, setSector] = useRecoilState(sectorAtom);
  return (
    <div className="grid gap-6">
      <div className={`grid gap-4 ${styles.layout}`}>
        <FlexColGroup>
          <ZoneCard
            content={sector.environment}
            onChange={() => setSector(getSector())}
            title={Card.ENVIRONMENT}
          />
          <Ruin />
          <Rot />
          <Mood />
        </FlexColGroup>
        <div className="max-h-fit">
          <ResetButton />
        </div>
        <FlexColGroup>
          <Threat />
          <Artifact />
        </FlexColGroup>
        <div className={`grid ${styles.threatGrid} gap-4 items-center`}>
          <ThreatButton />
          <ThreatInput />
        </div>
      </div>
    </div>
  );
};
