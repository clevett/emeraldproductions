import { Subtitle } from "@/components";
import { systems, metaSrNPCs } from "@/resources";
import { npcs } from "@/data";

import { NpcCard } from "./components/NpcCard";

import type { Metadata } from "next";
export const metadata: Metadata = metaSrNPCs;

export default function Shadowrun6eNPCs() {
  const { label } = systems.sr6e.tools.shadowrunNpcs;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <div className="flex flex-wrap justify-center flex-row gap-4 sm:gap-8">
        {npcs.map((e, index) => (
          <NpcCard key={`npc-card-${index}`} npc={e} />
        ))}
      </div>
    </>
  );
}
