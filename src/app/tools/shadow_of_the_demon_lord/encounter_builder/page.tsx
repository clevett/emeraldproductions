import type { Metadata } from "next";

import { Subtitle } from "@/components";
import { systems, metaSotdlEncounterBuilder } from "@/resources";

import { EncounterBuilder as Builder } from "./components/EncounterBuilder";
import { EncounterState } from "./components/EncounterState";
import { Monster } from "./types";
export const metadata: Metadata = metaSotdlEncounterBuilder;

export default async function EncounterBuilder() {
  const { label } = systems.sotdl.tools.sotdlEncounterBuilder;

  const response = await fetch(
    `${process.env.URL}/api/shadow_of_the_demon_lord/npcs`,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error(`NPC lookup failed (HTTP ${response.status}); check server logs`);
  }
  const { data }: { data: Monster[] | undefined } = await response.json();

  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <EncounterState monsters={data ?? []}>
        <Builder />
      </EncounterState>
    </>
  );
}
