import { Subtitle } from "@/components";
import { systems, metaSotdlEncounterBuilder } from "@/resources";

import { EncounterBuilder as Builder } from "./components/EncounterBuilder";

import type { Metadata } from "next";
export const metadata: Metadata = metaSotdlEncounterBuilder;

import { getNPCs } from "@/app/api/shadow_of_the_demon_lord/npcs/route";

export default async function EncounterBuilder() {
  const { label } = systems.sotdl.tools.sotdlEncounterBuilder;

  const npcs = await getNPCs();
  const { data } = await npcs?.json();

  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <Builder data={data} />
    </>
  );
}
