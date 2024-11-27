import { Subtitle } from "@/components";
import { systems } from "@/resources";
import { FiveTorchesDeepMonsters as FTDM } from "./components/FiveTorchesDeepMonsters";

export default function FiveTorchesDeepMonsters() {
  const { label } = systems.ftd.tools.ftdMonsters;
  return (
    <div className="flex flex-col gap-4 items-center">
      <Subtitle>{label}</Subtitle>
      <FTDM />
    </div>
  );
}
