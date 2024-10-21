import { Subtitle } from "@/app/components";
import { systems, ftdMapGenerator } from "@/app/resources";
import { RandomMapGenerator } from "./components/RandomMapGenerator";

import type { Metadata } from "next";

export const metadata: Metadata = ftdMapGenerator;

export default function FiveTorchesRandomMapGenerator() {
  const { label } = systems.ftd.tools.ftdMaps;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <RandomMapGenerator />
    </>
  );
}
