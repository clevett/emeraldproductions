import { Subtitle } from "@/components";
import { systems, metaSrHeat } from "@/resources";

import { Heat } from "./components/Heat";

import type { Metadata } from "next";
export const metadata: Metadata = metaSrHeat;

export default function Shadowrun6eHeat() {
  const { label } = systems.sr6e.tools.shadowrunHeat;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <Heat />
    </>
  );
}
