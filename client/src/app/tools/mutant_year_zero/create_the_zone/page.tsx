"use client";
import { RecoilRoot } from "recoil";
import { Subtitle } from "@/app/components";
import { systems } from "@/app/resources";
import { Sector } from "./Sector";

export default function CreateTheZone() {
  const { label } = systems.myz.tools.createTheZone;
  return (
    <div>
      <Subtitle mb="4">{label}</Subtitle>
      <RecoilRoot>
        <Sector />
      </RecoilRoot>
    </div>
  );
}
