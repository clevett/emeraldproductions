import { Subtitle } from "@/components";
import { systems, metaSrMissionGenerator } from "@/resources";

import { MissionGenerator } from "./components/MissionGenerator";

import type { Metadata } from "next";
export const metadata: Metadata = metaSrMissionGenerator;
export default function MissionGeneratorPage() {
  const { label } = systems.sr5e.tools.shadowrunMissionGenerator;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <MissionGenerator />
    </>
  );
}
