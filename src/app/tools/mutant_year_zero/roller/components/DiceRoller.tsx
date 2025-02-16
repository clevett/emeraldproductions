"use client";
import { RecoilRoot } from "recoil";
import { attributeSelector, skillSelector, gearSelector } from "../recoil";
import { DiceCounter } from "./DiceCounter";
import { Dicebox } from "./Dicebox";

export const DiceRoller = () => {
  return (
    <RecoilRoot>
      <div className="grid gap-4 sm:gap-6 auto-rows-max items-start justify-items-center w-full h-full">
        <div className="grid gap-4 sm:gap-6">
          <div className="flex flex-wrap flex-row gap-4 justify-center sm:justify-between">
            <div className="flex flex-wrap gap-6 grid-flow-col auto-cols-max justify-center">
              <DiceCounter
                selector={attributeSelector}
                className="bg-yellow-400 hover:bg-yellow-700 text-neutral-950"
              />
              <DiceCounter
                selector={skillSelector}
                className="bg-green-700 hover:bg-green-500 text-neutral-950"
              />
              <DiceCounter
                selector={gearSelector}
                className="bg-neutral-900 hover:bg-neutral-500"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4 justify-center flex-wrap">
          <Dicebox />
        </div>
      </div>
    </RecoilRoot>
  );
};
