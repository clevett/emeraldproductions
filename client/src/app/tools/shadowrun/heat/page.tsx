"use client";
import { Subtitle } from "@/app/components";
import { systems } from "@/app/resources";

export default function Shadowrun6eHeat() {
  const { label } = systems.sr6e.tools.shadowrunHeat;
  return (
    <>
      <Subtitle mb="4">{label}</Subtitle>
      {/* <Travel /> */}
    </>
  );
}
