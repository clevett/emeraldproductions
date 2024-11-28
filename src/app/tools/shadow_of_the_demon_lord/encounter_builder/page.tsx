import { Subtitle } from "@/components";
import { systems, metaSotdlEncounterBuilder } from "@/resources";

import { EncounterBuilder as Builder } from "./components/EncounterBuilder";
import { Monster } from "./types";

import type { Metadata } from "next";
export const metadata: Metadata = metaSotdlEncounterBuilder;

export default async function EncounterBuilder() {
  const { label } = systems.sotdl.tools.sotdlEncounterBuilder;

  const response = await fetch(`${process.env.ENCOUNTER_BUILDER_API}`);
  const data: Monster[] | undefined = await response.json();

  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <Builder data={data} />
    </>
  );
}
