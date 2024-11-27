import { Subtitle } from "@/components";
import { systems } from "@/resources";
import { FiveTorchesDeepMonsters as FTDM } from "./components/FiveTorchesDeepMonsters";

export default function FiveTorchesDeepMonsters() {
  const { label } = systems.ftd.tools.ftdMonsters;
  return (
    <>
      <Subtitle className="4">{label}</Subtitle>
      <FTDM />
    </>
  );
}
