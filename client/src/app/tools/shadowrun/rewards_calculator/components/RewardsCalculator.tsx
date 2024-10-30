import { RecoilRoot } from "recoil";

import { Heading } from "@/app/components";

import { GermanRulesSwitch } from "./GermanRulesSwitch";
import { HighestOpposingDicePool } from "./HighestOpposingDicePool";
import { ObjectivesCompleted } from "./ObjectivesCompleted";
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
        </div>
        {/* <div className={`grid text-center ${styles.rewardsColumns}`}>
          <RunTypeSlider />

          <NuyenSituationModifiers />

          <PercentModifierSlider />

          <NegotiationHits />
        </div>

        <div className={`grid text-center ${styles.rewardsColumns}`}>
          <MissionChallenge />

          <ObjectiveSlider />

          <div className="grid grid-cols-2 justify-items-center">
            <GermanRulesSwitch />
            <SurvivedSwitch />
          </div>

          <ResetButton />
        </div> */}
      </div>
    </RecoilRoot>
  );
};
