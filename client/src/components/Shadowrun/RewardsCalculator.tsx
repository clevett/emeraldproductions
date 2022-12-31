import { EuiSpacer } from "@elastic/eui";
import { RecoilRoot } from "recoil";
import { LayoutBody } from "../LayoutBody";
import { FlexColGroup } from "../Styled/FlexColGroup";
import {
  GermanRulesSwitch,
  KarmaCard,
  MissionChallenge,
  NegotiationHits,
  NuyenCard,
  NuyenSituationModifiers,
  ObjectiveSlider,
  PercentModifierSlider,
  ResetButton,
  RunTypeSlider,
  SurvivedSwitch,
} from "./RewardsCalculator/";

import styles from "./styles.module.css";

export const RewardsCalculator = () => {
  return (
    <LayoutBody
      DriveThruId="115985"
      subtitle="Rewards Calculator"
      title="Shadowrun 5th Edition"
    >
      <RecoilRoot>
        <FlexColGroup>
          <div className={`grid text-center ${styles.rewardsColumns}`}>
            <NuyenCard />

            <EuiSpacer size="l" />

            <RunTypeSlider />

            <EuiSpacer size="l" />

            <NuyenSituationModifiers />

            <EuiSpacer size="l" />

            <PercentModifierSlider />

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

            <div className="grid grid-cols-2 justify-items-center">
              <GermanRulesSwitch />
              <SurvivedSwitch />
            </div>

            <EuiSpacer size="xxl" />

            <ResetButton />
          </div>
        </FlexColGroup>
      </RecoilRoot>
    </LayoutBody>
  );
};
