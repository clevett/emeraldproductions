import { useRecoilValue } from "recoil";
import { FlexColGroup } from "../../Styled/FlexColGroup";

import { selectSectorFamily } from "./recoil";

import { ThreatInput } from "./components/ThreatInput";
import { CreateSector } from "./components/CreateSector";

import { SectorCard } from "./components/SectorCard";

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
        {sectors.map(({ id }) => <SectorCard key={id} id={id} />).reverse()}
      </FlexColGroup>
    </div>
  );
};
