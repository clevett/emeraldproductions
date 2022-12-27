import { EuiFlexGroup } from "@elastic/eui";
import { RecoilRoot } from "recoil";

import { CardPanel } from "../CardPanel";
import { LayoutBody } from "../LayoutBody";
import { MissionCard, NaturalLanguage } from "./components";
import { Options } from "../../data/srMissions";
import { ResetButton } from "./components/ResetButton";

export const MissionGenerator = () => {
  const cardNodes = Object.values(Options).map((item, index) => {
    return <MissionCard key={index} item={item} />;
  });

  return (
    <LayoutBody
      DriveThruId="115985"
      subtitle="Mission Generator"
      title="Shadowrun"
    >
      <RecoilRoot>
        <EuiFlexGroup className="flex-col justify-start gap-4 mb-6 flex-wrap">
          <CardPanel>
            <NaturalLanguage />
            <ResetButton />
          </CardPanel>
          <EuiFlexGroup className="flex-wrap" gutterSize="l">
            {cardNodes}
          </EuiFlexGroup>
        </EuiFlexGroup>
      </RecoilRoot>
    </LayoutBody>
  );
};
