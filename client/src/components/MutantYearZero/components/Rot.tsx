import { useRecoilState } from "recoil";
import { getRot } from "../helpers";
import { rotAtom } from "../recoil";
import { ZoneCard } from "./ZoneCard";

export const Rot = () => {
  const [rot, setRot] = useRecoilState(rotAtom);
  return (
    <ZoneCard
      title="Rot Level"
      content={rot}
      onChange={() => setRot(getRot())}
    />
  );
};
