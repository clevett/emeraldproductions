import { useState } from "react";
import { getRot } from "../helpers";
import { ZoneCard } from "./ZoneCard";

export const Rot = () => {
  const [rot, setRot] = useState(getRot());
  return (
    <ZoneCard
      title="Rot Level"
      content={rot}
      onChange={() => setRot(getRot())}
    />
  );
};
