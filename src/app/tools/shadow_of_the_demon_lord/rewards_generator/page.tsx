import { Subtitle } from "@/components";
import { systems, metaSotdlRewardsGenerator } from "@/resources";
import { RewardsGenerator as Rewards } from "./components/RewardsGenerator";

import type { Metadata } from "next";
export const metadata: Metadata = metaSotdlRewardsGenerator;

export default function RewardsGenerator() {
  const { label } = systems.sotdl.tools.sotdlRewardsGenerator;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <Rewards />
    </>
  );
}
