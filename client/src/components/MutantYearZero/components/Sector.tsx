import { useRecoilState } from "recoil";
import { FlexColGroup } from "../../Styled/FlexColGroup";
import { getRot, getThreat } from "../helpers";
import { sectorAtom } from "../recoil";
import { Ruin } from "./Ruin";
import { ZoneCard } from "./ZoneCard";

export const Sector = () => {
  const [sector] = useRecoilState(sectorAtom);

  const rot = getRot();
  const threat = getThreat();

  return (
    <FlexColGroup>
      <ZoneCard title="Environment" content={sector.environment} />
      <Ruin environment={sector.environment} />
      <ZoneCard title="Threat" content={threat} />
      {/* <ZoneCard title="Artifact" content={sector.artifact} /> */}
      <ZoneCard title="Rot Level" content={rot} />
    </FlexColGroup>
  );
};
