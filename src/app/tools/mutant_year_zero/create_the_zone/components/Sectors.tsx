import { useRecoilValue } from "recoil";

import { selectSectorFamily } from "../recoil";
import { SectorCard } from "./SectorCard";

export const Sectors = () => {
  const sectors = useRecoilValue(selectSectorFamily);

  return (
    <>{sectors.map(({ id }) => <SectorCard key={id} id={id} />).reverse()}</>
  );
};
