"use client";
import { Subtitle } from "@/components";
import { systems } from "@/resources";

import { Heat } from "./components/Heat";

export default function Shadowrun6eHeat() {
  const { label } = systems.sr6e.tools.shadowrunHeat;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <Heat />
    </>
  );
}
