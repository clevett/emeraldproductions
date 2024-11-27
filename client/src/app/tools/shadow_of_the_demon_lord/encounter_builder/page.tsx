import { Subtitle } from "@/components";
import { systems } from "@/resources";

import { EncounterBuilder as Builder } from "./components/EncounterBuilder";

export default function EncounterBuilder() {
  const { label } = systems.sotdl.tools.sotdlEncounterBuilder;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <Builder />
    </>
  );
}
