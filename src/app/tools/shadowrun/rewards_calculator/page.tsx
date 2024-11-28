import { Subtitle } from "@/components";
import { systems, metaSrRewards } from "@/resources";

import { RewardsCalculator } from "./components/RewardsCalculator";

import type { Metadata } from "next";
export const metadata: Metadata = metaSrRewards;

export default function RewardCalculatorPage() {
  const { label } = systems.sr5e.tools.shadowrunRewardsCalculator;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <RewardsCalculator />
    </>
  );
}
