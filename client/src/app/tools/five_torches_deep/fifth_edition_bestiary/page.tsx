import { Subtitle } from "@/app/components";
import { systems } from "@/app/resources";
import { FiveTorchesDeepMonsters as FTDM } from "./components/FiveTorchesDeepMonsters";

export default function FiveTorchesDeepMonsters() {
  const { label } = systems.ftd.tools.ftdMonsters;
  return (
    <div>
      <Subtitle mb="4">{label}</Subtitle>
      <FTDM />
    </div>
  );
}
