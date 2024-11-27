"use client";
import { Subtitle } from "@/components";
import { systems } from "@/resources";

import { MissionGenerator } from "./components/MissionGenerator";

export default function MissionGeneratorPage() {
  const { label } = systems.sr5e.tools.shadowrunMissionGenerator;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <MissionGenerator />
    </>
  );
}
