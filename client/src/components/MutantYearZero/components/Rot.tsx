import { useRecoilState } from "recoil";
import { Card } from "../data/createTheZone";
import { getRot } from "../helpers";
import { rotAtom } from "../recoil";
import { ZoneCard } from "./ZoneCard";

export const Rot = () => {
  const [rot, setRot] = useRecoilState(rotAtom);
  return (
    <ZoneCard
      title={Card.ROT}
      content={rot}
      onChange={() => setRot(getRot())}
    />
  );
};
