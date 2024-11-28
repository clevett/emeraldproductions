import { Subtitle } from "@/components";
import { systems, metaFtdMapGenerator } from "@/resources";
import { RandomMapGenerator } from "./components/RandomMapGenerator";

import type { Metadata } from "next";

export const metadata: Metadata = metaFtdMapGenerator;

export default function FiveTorchesRandomMapGenerator() {
  const { label } = systems.ftd.tools.ftdMaps;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <RandomMapGenerator />
    </>
  );
}
