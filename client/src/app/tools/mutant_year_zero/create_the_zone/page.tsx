"use client";
import { RecoilRoot } from "recoil";
import { Subtitle } from "@/components";
import { systems } from "@/resources";
import { Sector } from "./components/Sector";

export default function CreateTheZone() {
  const { label } = systems.myz.tools.createTheZone;
  return (
    <>
      <Subtitle>{label}</Subtitle>
      <RecoilRoot>
        <Sector />
      </RecoilRoot>
    </>
  );
}
