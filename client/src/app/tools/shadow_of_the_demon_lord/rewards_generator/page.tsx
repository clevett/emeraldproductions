"use client";
import { Subtitle } from "@/app/components";
import { systems } from "@/app/resources";
import { RewardsGenerator as Rewards } from "./components/RewardsGenerator";

export default function RewardsGenerator() {
  const { label } = systems.sotdl.tools.sotdlRewardsGenerator;
  return (
    <div>
      <Subtitle mb="4">{label}</Subtitle>
      <Rewards />
    </div>
  );
}
