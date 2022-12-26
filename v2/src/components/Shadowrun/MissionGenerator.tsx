import {
  EuiFlexGroup,
  EuiText,
  EuiCard,
  EuiIcon,
  EuiFlexItem,
  EuiButton,
} from "@elastic/eui";
import { useState } from "react";
import { CardPanel } from "../CardPanel";
import { LayoutBody } from "../LayoutBody";

import { MissionCard } from "./components/MissionCard";

import { Options } from "../../data/srMissions";

export const MissionGenerator = () => {
  const onChange = (option: string) => {
    console.table({
      option,
    });
  };

  const cardNodes = Object.values(Options).map((item, index) => {
    return (
      <MissionCard key={index} onChange={() => onChange(item)} item={item} />
    );
  });

  return (
    <LayoutBody
      DriveThruId="115985"
      subtitle="Mission Generator"
      title="Shadowrun"
    >
      <EuiFlexGroup className="flex-col justify-start gap-4 mb-6 flex-wrap">
        <CardPanel>
          <EuiText>The mission goes here</EuiText>
          <EuiText className="italic">The twist!</EuiText>
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
