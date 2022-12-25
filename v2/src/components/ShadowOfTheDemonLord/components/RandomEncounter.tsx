import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { useState } from "react";
import {
  threat as threatList,
  encounter as encounterList,
} from "../../../data";
import { CardPanel } from "../../CardPanel";
import { TravelSelect } from "./TravelSelect";

import { AnimatedDie } from "../../AnimatedDie";

export const RandomEncounter = () => {
  const [threat, setThreat] = useState(threatList[2]);
  const [encounter, setEncounter] = useState("Roll for an encounter");

  const handleRoll = () => {
    console.log("roll");
  };

  return (
    <EuiFlexGroup className="flex-col">
      <EuiFlexItem className="max-w-xs self-center w-full">
        <TravelSelect
          list={threatList}
          //@ts-expect-error ignore for now
          onChange={setThreat}
          title="Threat Level"
          value={threat.name}
        />
      </EuiFlexItem>
      <CardPanel>
        <EuiTitle className="text-center" size="s">
          <h4>Random Encounter</h4>
        </EuiTitle>
        <EuiSpacer />
        <EuiText className="text-center italic">{threat.frequency}</EuiText>
        <EuiSpacer />
        <EuiText className="text-center">{encounter}</EuiText>
        <EuiFlexItem className="self-center w-full">
          <AnimatedDie dieSize="d20" onRoll={handleRoll} />
        </EuiFlexItem>
      </CardPanel>
    </EuiFlexGroup>
  );
};
