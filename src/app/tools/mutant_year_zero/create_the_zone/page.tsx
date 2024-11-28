"use client";
import { RecoilRoot } from "recoil";
import { Subtitle } from "@/components";
import { systems, metaMyzCreateZone } from "@/resources";
import { Sector } from "./components/Sector";

import type { Metadata } from "next";

export const metadata: Metadata = metaMyzCreateZone;

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
