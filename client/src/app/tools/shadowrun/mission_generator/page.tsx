"use client";
import { Subtitle } from "@/app/components";
import { systems } from "@/app/resources";

export default function MissionGenerator() {
  const { label } = systems.sr5e.tools.shadowrunMissionGenerator;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      {/* <Travel /> */}
    </>
  );
}
