import { EuiFlexGroup, EuiSpacer } from "@elastic/eui";
import { RecoilRoot } from "recoil";
import { LayoutBody } from "../LayoutBody";
import {
  MissionChallenge,
  RunTypeSlider,
  KarmaCard,
  NuyenCard,
  GermanRulesSwitch,
  SurvivedSwitch,
  ObjectiveSlider,
  NuyenSituationModifiers,
} from "./RewardsCalculator/";
import { CostModifier } from "./RewardsCalculator/CostModifier";
import { NegotiationHits } from "./RewardsCalculator/NegotiationHits";

import styles from "./styles.module.css";

export const RewardsCalculator = () => {
  return (
    <LayoutBody
      DriveThruId="115985"
      subtitle="Rewards Calculator"
      title="Shadowrun"
    >
      <RecoilRoot>
        <EuiFlexGroup className="flex-col justify-center gap-4 flex-wrap">
          <div className={`grid text-center ${styles.rewardsColumns}`}>
            <NuyenCard />

            <EuiSpacer size="l" />

            <RunTypeSlider />

            <EuiSpacer size="l" />

            <NuyenSituationModifiers />

            <EuiSpacer size="l" />

            <CostModifier />

            <EuiSpacer size="l" />

            <NegotiationHits />
          </div>

          <div className={`grid text-center ${styles.rewardsColumns}`}>
            <KarmaCard />

            <EuiSpacer size="l" />

            <MissionChallenge />

            <EuiSpacer size="l" />

            <ObjectiveSlider />

            <EuiSpacer size="l" />

            <div className="grid grid-cols-2">
              <GermanRulesSwitch />
              <SurvivedSwitch />
            </div>
          </div>
        </EuiFlexGroup>
      </RecoilRoot>
    </LayoutBody>
  );
};
