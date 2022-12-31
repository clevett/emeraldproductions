import { RecoilRoot } from "recoil";
import { LayoutBody } from "../LayoutBody";
import { FlexColGroup } from "../Styled/FlexColGroup";
import { ZoneCard } from "./components/ZoneCard";

import { getRuin, getSector } from "./helpers";

export const CreateTheZone = () => {
  const sector = getSector();

  if (!sector) {
    return <span>Unable to find sector.</span>;
  }

  const ruin = getRuin(sector.environment);

  return (
    <LayoutBody
      DriveThruId="139453"
      subtitle="Create the Zone"
      title="Mutant Year Zero"
    >
      <RecoilRoot>
        <FlexColGroup>
          <ZoneCard title="Environment" content={sector.environment} />
          <ZoneCard title="Ruin" content={ruin} />
          {/* <ZoneCard title="Threat" content={sector.threat} />
          <ZoneCard title="Artifact" content={sector.artifact} /> */}
          <ZoneCard title="Rot" content={""} />
        </FlexColGroup>
      </RecoilRoot>
    </LayoutBody>
  );
};
