"use client";
import { RecoilRoot } from "recoil";
import { attributeSelector, skillSelector, gearSelector } from "../recoil";
import { DiceCounter } from "./DiceCounter";

export const DiceRoller = () => {
  return (
    <RecoilRoot>
      <div className="grid gap-4 sm:gap-6 auto-rows-max items-start justify-items-center w-full h-full">
        <div className="grid gap-4 sm:gap-6">
          <div className="flex flex-wrap flex-row gap-4 justify-center sm:justify-between">
            <div className="flex flex-wrap gap-6 grid-flow-col auto-cols-max justify-center">
              <DiceCounter
                selector={attributeSelector}
                className="bg-yellow-400 hover:bg-yellow-600 text-neutral-950"
              />
              <DiceCounter
                selector={skillSelector}
                className="bg-lime-500 hover:bg-lime-700 text-neutral-950"
              />
              <DiceCounter
                selector={gearSelector}
                className="bg-neutral-950 hover:bg-neutral-700"
              />
            </div>
          </div>
          {/* <Callout className="max-w-fit">
            <span>
              1–4 Fringe Zone Sectors, 5–8 Central Zone Sectors, 9+ Unusually
              Dangerous Areas
            </span>
          </Callout> */}
        </div>

        <div className="flex flex-row gap-4 justify-center flex-wrap">
          Content
        </div>
      </div>
    </RecoilRoot>
  );
};
