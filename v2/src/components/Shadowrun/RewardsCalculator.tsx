import { EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { RecoilRoot } from "recoil";
import { LayoutBody } from "../LayoutBody";
import {
  MissionChallenge,
  RunTypeSlider,
  KarmaCard,
  NuyenCard,
} from "./components/";
import styles from "./styles.module.css";

export const RewardsCalculator = () => {
  return (
    <LayoutBody
      DriveThruId="115985"
      subtitle="Rewards Calculator"
      title="Shadowrun"
    >
      <RecoilRoot>
        <EuiFlexGroup className="flex-col justify-start gap-4 mb-6 flex-wrap">
          <EuiFlexGroup className="gap-4 text-center">
            <EuiFlexItem>
              <NuyenCard />
            </EuiFlexItem>
            <EuiFlexItem>
              <KarmaCard />
            </EuiFlexItem>
          </EuiFlexGroup>

          <EuiFlexGroup className="gap-4 text-center">
            <EuiFlexItem className={`max-w-xs ${styles.min350}`}>
              <RunTypeSlider />
            </EuiFlexItem>

            <EuiFlexItem className="max-w-xs min-w-fit">
              <MissionChallenge />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexGroup>
      </RecoilRoot>
    </LayoutBody>
  );
};
