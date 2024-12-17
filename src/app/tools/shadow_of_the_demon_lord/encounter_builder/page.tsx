import { Subtitle } from "@/components";
import { systems, metaSotdlEncounterBuilder } from "@/resources";
import { GET } from "@/app/api/shadow_of_the_demon_lord/npcs/route";

import { EncounterBuilder as Builder } from "./components/EncounterBuilder";

import type { Metadata } from "next";
export const metadata: Metadata = metaSotdlEncounterBuilder;

export default async function EncounterBuilder() {
  const { label } = systems.sotdl.tools.sotdlEncounterBuilder;

  const npcs = await GET();
  const { data } = await npcs?.json();

  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <Builder data={data} />
    </>
  );
}
