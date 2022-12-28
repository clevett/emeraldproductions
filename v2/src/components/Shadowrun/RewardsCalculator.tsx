import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { RecoilRoot } from "recoil";
import { LayoutBody } from "../LayoutBody";
import { FlexColGroup } from "../Styled/FlexColGroup";
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

import styles from "./styles.module.css";

export const RewardsCalculator = () => {
  return (
    <LayoutBody
      DriveThruId="115985"
      subtitle="Rewards Calculator"
      title="Shadowrun"
    >
      <RecoilRoot>
        <FlexColGroup>
          <EuiFlexGroup className="gap-4 text-center">
            <EuiFlexItem>
              <NuyenCard />
            </EuiFlexItem>
            <EuiFlexItem>
              <KarmaCard />
            </EuiFlexItem>
          </EuiFlexGroup>

          <EuiFlexGroup className="gap-4 text-center flex-wrap min-w-fit">
            <EuiFlexItem className={`max-w-xs ${styles.min350}`}>
              <RunTypeSlider />
            </EuiFlexItem>

            <EuiFlexItem className="max-w-xs min-w-fit">
              <MissionChallenge />
            </EuiFlexItem>

            <EuiFlexItem className="max-w-xs min-w-fit">
              <NuyenSituationModifiers />
            </EuiFlexItem>

            <EuiFlexItem className="max-w-xs min-w-fit">
              <GermanRulesSwitch />
            </EuiFlexItem>

            <EuiFlexItem className="max-w-xs min-w-fit">
              <SurvivedSwitch />
            </EuiFlexItem>

            <EuiFlexItem className="max-w-xs min-w-fit">
              <ObjectiveSlider />
            </EuiFlexItem>
          </EuiFlexGroup>
        </FlexColGroup>
      </RecoilRoot>
    </LayoutBody>
  );
};
