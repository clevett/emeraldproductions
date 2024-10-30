"use client";
import { Subtitle } from "@/app/components";
import { systems } from "@/app/resources";
import { npcs } from "@/app/data";

import { NpcCard } from "./components/NpcCard";

export default function Shadowrun6eNPCs() {
  const { label } = systems.sr6e.tools.shadowrunNpcs;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <div className="flex flex-wrap flex-row gap-4">
        {npcs.map((e, index) => (
          <NpcCard key={`npc-card-${index}`} npc={e} />
        ))}
      </div>
    </>
  );
}
