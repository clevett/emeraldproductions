"use client";
import { RecoilRoot } from "recoil";

import { Callout, Heading } from "@/components";

import { CreateSector } from "./CreateSector";
import { ThreatLevel } from "./ThreatLevel";
import { Sectors } from "./Sectors";

export const Sector = () => {
  return (
    <RecoilRoot>
      <div className="grid gap-4 sm:gap-6 auto-rows-max items-start justify-items-center w-full h-full">
        <div className="grid gap-4 sm:gap-6">
          <div className="flex flex-wrap flex-row gap-4 justify-center sm:justify-between">
            <div className="grid gap-4 grid-flow-col auto-cols-max">
              <Heading as="h3">Threat Level</Heading>
              <ThreatLevel />
            </div>
            <CreateSector />
          </div>
          <Callout className="max-w-fit">
            <span>
              1–4 Fringe Zone Sectors, 5–8 Central Zone Sectors, 9+ Unusually
              Dangerous Areas
            </span>
          </Callout>
        </div>

        <div className="flex flex-row gap-4 justify-center flex-wrap">
          <Sectors />
        </div>
      </div>
    </RecoilRoot>
  );
};
