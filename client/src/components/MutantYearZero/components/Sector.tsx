import { useRecoilState } from "recoil";
import { FlexColGroup } from "../../Styled/FlexColGroup";
import { getSector } from "../helpers";
import { sectorAtom } from "../recoil";
import { Artifact } from "./Artifact";
import { Rot } from "./Rot";
import { Ruin } from "./Ruin";
import { Threat } from "./Threat";
import { ZoneCard } from "./ZoneCard";

export const Sector = () => {
  const [sector, setSector] = useRecoilState(sectorAtom);

  return (
    <FlexColGroup>
      <ZoneCard
        content={sector.environment}
        onChange={() => setSector(getSector())}
        title="Environment"
      />
      <Ruin hasRuin={sector.ruin} environment={sector.environment} />
      <Threat hasThreat={sector.threat} />
      <Artifact hasArtifact={sector.artifact} />
      <Rot />
    </FlexColGroup>
  );
};
