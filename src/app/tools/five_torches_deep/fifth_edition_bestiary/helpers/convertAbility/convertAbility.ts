import { ability } from "../../types/ftd";

import { convertDesc } from "../convertText";

const convertAbility = (a: ability[]) => {
  return a.map(({ name, desc }: ability) => ({
    name,
    desc: convertDesc(desc),
  }));
};

export default convertAbility;
