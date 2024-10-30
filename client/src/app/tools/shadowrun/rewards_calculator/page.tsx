"use client";
import { Subtitle } from "@/app/components";
import { systems } from "@/app/resources";

import { RewardsCalculator } from "./components/RewardsCalculator";

export default function RewardCalculatorPage() {
  const { label } = systems.sr5e.tools.shadowrunRewardsCalculator;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      <RewardsCalculator />
    </>
  );
}
