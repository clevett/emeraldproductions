import { useRecoilValue } from "recoil";

import { selectSectorFamily } from "./recoil";

import { ThreatInput, CreateSector, SectorCard } from "./components";

export const Sector = () => {
  const sectors = useRecoilValue(selectSectorFamily);

  return (
    <div className="grid gap-6">
      <div className="grid gap-4">
        <ThreatInput />
      </div>
      <div className="max-h-fit">
        <CreateSector />
      </div>
      <div className="flex flex-row justify-start gap-4 flex-wrap">
        {sectors.map(({ id }) => <SectorCard key={id} id={id} />).reverse()}
      </div>
    </div>
  );
};
