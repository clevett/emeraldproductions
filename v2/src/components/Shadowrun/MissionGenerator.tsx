import { EuiFlexGroup } from "@elastic/eui";
import { RecoilRoot } from "recoil";

import { CardPanel } from "../CardPanel";
import { LayoutBody } from "../LayoutBody";
import { MissionCard, NaturalLanguage, ResetButton } from "./components";
import { Options } from "../../data/srMissions";
import { FlexColGroup } from "../Styled/FlexColGroup";

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
        <FlexColGroup>
          <CardPanel>
            <NaturalLanguage />
            <ResetButton />
          </CardPanel>
          <EuiFlexGroup className="flex-wrap" gutterSize="l">
            {cardNodes}
          </EuiFlexGroup>
        </FlexColGroup>
      </RecoilRoot>
    </LayoutBody>
  );
};
