import { Subtitle } from "@/components";
import { systems, metaSotdlTravelTool } from "@/resources";
import { TravelTool as Travel } from "./components/TravelTool";

import type { Metadata } from "next";
export const metadata: Metadata = metaSotdlTravelTool;
export default function RewardsGenerator() {
  const { label } = systems.sotdl.tools.sotdlTravelTool;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <Travel />
    </>
  );
}
