import { EuiSpacer } from "@elastic/eui";
import { RecoilRoot } from "recoil";

import { CardPanel } from "../CardPanel";
import { LayoutBody } from "../LayoutBody";
import { Options } from "./MissionGenerator/data/srMissions";
import { ResetButton } from "./MissionGenerator/ResetButton";
import { NaturalLanguage } from "./MissionGenerator/NaturalLanguage";
import { MissionCard } from "./MissionGenerator/MissionCard";
import { FlexRowGroup } from "../Styled/FlexRowGroup";
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
        <CardPanel>
          <NaturalLanguage />
          <EuiSpacer size="s" />
          <ResetButton />
        </CardPanel>
        <EuiSpacer size="m" />
        <FlexRowGroup>{cardNodes}</FlexRowGroup>
      </RecoilRoot>
    </LayoutBody>
  );
};
