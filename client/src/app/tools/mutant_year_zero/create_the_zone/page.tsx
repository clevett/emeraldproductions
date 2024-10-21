"use client";
import { RecoilRoot } from "recoil";
import { Subtitle } from "@/app/components";
import { systems } from "@/app/resources";
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
