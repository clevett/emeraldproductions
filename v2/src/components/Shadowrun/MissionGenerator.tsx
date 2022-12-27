import { EuiFlexGroup, EuiButton } from "@elastic/eui";
import { CardPanel } from "../CardPanel";
import { LayoutBody } from "../LayoutBody";

import { MissionCard } from "./components/MissionCard";

import { MissionElement, Options } from "../../data/srMissions";
import { useState } from "react";
import { NaturalLanguage } from "./components/NaturalLanguage";

export const MissionGenerator = () => {
  const [mission, setMission] = useState({
    location: undefined,
    twist: undefined,
    employer: undefined,
    job: undefined,
    macguffin: undefined,
  });

  const onChange = (option: MissionElement) => {
    console.table({
      option,
    });

    setMission({
      ...mission,
      [`${setMission}`]: option,
    });
  };

  const cardNodes = Object.values(Options).map((item, index) => {
    return <MissionCard key={index} onChange={onChange} item={item} />;
  });

  return (
    <LayoutBody
      DriveThruId="115985"
      subtitle="Mission Generator"
      title="Shadowrun"
    >
      <EuiFlexGroup className="flex-col justify-start gap-4 mb-6 flex-wrap">
        <CardPanel>
          {/* <EuiText>The mission goes here</EuiText>
          <EuiText className="italic">The twist!</EuiText> */}
          <NaturalLanguage {...mission} />
          <EuiButton fill color="warning">
            Generate Mission
          </EuiButton>
        </CardPanel>
        <EuiFlexGroup className="flex-wrap" gutterSize="l">
          {cardNodes}
        </EuiFlexGroup>
      </EuiFlexGroup>
    </LayoutBody>
  );
};
