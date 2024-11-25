"use client";
import { Subtitle } from "@/app/components";
import { systems } from "@/app/resources";

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
