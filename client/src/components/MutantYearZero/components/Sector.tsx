import { useRecoilValue } from "recoil";
import { FlexColGroup } from "../../Styled/FlexColGroup";

import { selectSectorFamily } from "../recoil";

import { ThreatInput } from "./ThreatInput";
import { CreateSector } from "./CreateSector";

import { SectorCard } from "./SectorCard";

export const Sector = () => {
  const sectors = useRecoilValue(selectSectorFamily);

  return (
    <div className="grid gap-6">
      <div className={`grid gap-4 `}>
        <ThreatInput />
      </div>
      <div className="max-h-fit">
        <CreateSector />
      </div>
      <FlexColGroup>
        {sectors.map((e) => (
          <SectorCard key={e.id} sector={e} />
        ))}
      </FlexColGroup>
    </div>
  );
};
