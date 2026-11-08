import { useAtomValue } from "jotai";

import { selectSectorFamily } from "../state";
import { SectorCard } from "./SectorCard";

export const Sectors = () => {
  const sectors = useAtomValue(selectSectorFamily);

  return (
    <>{sectors.map(({ id }) => <SectorCard key={id} id={id} />).reverse()}</>
  );
};
