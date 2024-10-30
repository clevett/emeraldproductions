"use client";
import { Subtitle } from "@/app/components";
import { systems } from "@/app/resources";

export default function RewardCalculator() {
  const { label } = systems.sr5e.tools.shadowrunRewardsCalculator;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      {/* <Travel /> */}
    </>
  );
}
