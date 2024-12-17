import { Subtitle } from "@/components";
import { systems, metaSotdlEncounterBuilder } from "@/resources";

import { EncounterBuilder as Builder } from "./components/EncounterBuilder";

import type { Metadata } from "next";
export const metadata: Metadata = metaSotdlEncounterBuilder;

export default async function EncounterBuilder() {
  const { label } = systems.sotdl.tools.sotdlEncounterBuilder;

  const res = await fetch(`${process.env.API_SOTDL_ENCOUNTER_BUILDER}`, {
    headers: {
      "Content-Type": "application/json",
      "API-Key": `${process.env.SOTDL_NPC_KEY}`,
    },
  });
  const { data } = await res.json();

  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <Builder data={data} />
    </>
  );
}
