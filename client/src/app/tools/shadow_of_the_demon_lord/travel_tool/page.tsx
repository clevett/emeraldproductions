"use client";
import { Subtitle } from "@/app/components";
import { systems } from "@/app/resources";
import { TravelTool as Travel } from "./components/TravelTool";

export default function RewardsGenerator() {
  const { label } = systems.sotdl.tools.sotdlTravelTool;
  return (
    <div>
      <Subtitle mb="4">{label}</Subtitle>
      <Travel />
    </div>
  );
}
