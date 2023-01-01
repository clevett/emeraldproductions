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

export const Sector = () => {
  const [sector, setSector] = useRecoilState(sectorAtom);

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 grid-rows-2">
        <FlexColGroup>
          <ZoneCard
            content={sector.environment}
            onChange={() => setSector(getSector())}
            title={Card.ENVIRONMENT}
          />
          <Rot />
          <Mood />
        </FlexColGroup>
        <FlexColGroup>
          <Ruin />
          <Threat />
          <Artifact />
        </FlexColGroup>
      </div>
      <div className="max-h-fit">
        <ResetButton />
      </div>
    </div>
  );
};
