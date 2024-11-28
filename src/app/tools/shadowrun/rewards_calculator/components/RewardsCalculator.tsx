"use client";
import { RecoilRoot } from "recoil";

import { Heading } from "@/components";

import { GermanRulesSwitch } from "./GermanRulesSwitch";
import { HighestOpposingDicePool } from "./HighestOpposingDicePool";
import { NegotiationHits } from "./NegotiationHits";
import { NuyenSituationModifiers } from "./NuyenSituationModifiers";
import { ObjectivesCompleted } from "./ObjectivesCompleted";
import { PercentModifierSlider } from "./PercentModifierSlider";
import { RewardCard } from "./RewardCard";
import { RunType } from "./RunType";
import { SurvivedSwitch } from "./SurvivedSwitch";

export const RewardsCalculator = () => {
  return (
    <RecoilRoot>
      <div className="flex flex-wrap gap-6 justify-center items-center auto-rows-min flex-col">
        <div className="flex flex-wrap justify-center  items-center gap-4">
          <RewardCard />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 auto-rows-min">
          <div className="grid gap-4  auto-cols-fit auto-rows-min text-center">
            <Heading as="h3" className="text-center">
              Nuyen & Karma Modifiers
            </Heading>
            <HighestOpposingDicePool />
            <RunType />
          </div>

          <div className="grid gap-4 justify-center auto-cols-fit auto-rows-min text-center">
            <Heading as="h3" className="text-center">
              Karma Modifiers
            </Heading>
            <ObjectivesCompleted />
            <SurvivedSwitch />
            <GermanRulesSwitch />
          </div>

          <div className="grid gap-4 justify-center auto-cols-fit auto-rows-min text-center">
            <Heading as="h3" className="text-center">
              Nuyen Modifiers
            </Heading>
            <PercentModifierSlider />
            <NuyenSituationModifiers />
            <NegotiationHits />
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
};
