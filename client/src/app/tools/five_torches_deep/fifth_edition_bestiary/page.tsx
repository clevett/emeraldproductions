import { Subtitle } from "@/app/components";
import { systems } from "@/app/resources";

export default function FiveTorchesDeepMonsters() {
  const { label } = systems.ftd.tools.ftdMonsters;
  return (
    <div>
      <Subtitle mb="4">{label}</Subtitle>
      <p>
        This page is a work in progress. It will contain a list of monsters from
        the 5th edition of the world's greatest roleplaying game.
      </p>
    </div>
  );
}
