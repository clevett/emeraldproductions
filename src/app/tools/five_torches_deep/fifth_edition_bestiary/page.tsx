import { Metadata } from "next";

import { Subtitle } from "@/components";
import { systems, metaFtdBestiary } from "@/resources";

import { FiveTorchesDeepMonsters as FTDM } from "./components/FiveTorchesDeepMonsters";

export const metadata: Metadata = metaFtdBestiary;

export default function FiveTorchesDeepMonsters() {
  const { label } = systems.ftd.tools.ftdMonsters;
  return (
    <>
      <Subtitle>{label}</Subtitle>
      <FTDM />
    </>
  );
}
