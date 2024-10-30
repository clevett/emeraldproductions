import { RecoilRoot } from "recoil";

import { Heading } from "@/app/components";

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
      <div className="flex flex-wrap gap-6 justify-start auto-rows-min flex-col">
        <div className="flex flex-wrap gap-4">
          <RewardCard />
        </div>
        <div className="flex flex-wrap gap-4 justify-start auto-rows-min">
          <div className="grid gap-4 justify-start auto-cols-fit text-center">
            <Heading as="h3">Nuyen & Karma Modifiers</Heading>
            <HighestOpposingDicePool />
            <RunType />
          </div>

          <div className="grid gap-4 justify-start auto-cols-fit">
            <Heading as="h3" className="text-center">
              Karma Modifiers
            </Heading>
            <ObjectivesCompleted />
            <SurvivedSwitch />
            <GermanRulesSwitch />
          </div>

          <div className="grid gap-4 justify-start auto-cols-fit">
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
