"use client";
import { useRecoilValue, useRecoilState } from "recoil";

import { Callout, Heading, Input } from "@/components";

import { selectSectorFamily, threatLevelAtom } from "../recoil";
import { CreateSector, SectorCard } from "./";

export const Sector = () => {
  const sectors = useRecoilValue(selectSectorFamily);
  const [base, setBase] = useRecoilState(threatLevelAtom);

  return (
    <div className="grid gap-4 sm:gap-6 auto-rows-max items-start justify-items-center w-full h-full">
      <div className="grid gap-4 sm:gap-6">
        <div className="flex flex-wrap flex-row gap-4 justify-center sm:justify-between">
          <div className="grid gap-4 grid-flow-col auto-cols-max">
            <Heading as="h3">Threat Level</Heading>
            <Input
              defaultValue={`${base}`}
              label="Enter threat level"
              max={20}
              min={1}
              placeholder="2"
              styles="text-center"
              submit={(value: string) => setBase(parseInt(value))}
            />
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
        {sectors.map(({ id }) => <SectorCard key={id} id={id} />).reverse()}
      </div>
    </div>
  );
};
