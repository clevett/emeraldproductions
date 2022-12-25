import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { useState } from "react";
import { threat as threatList } from "../../../data";
import { CardPanel } from "../../CardPanel";
import { TravelSelect } from "./TravelSelect";

export const RandomEncounter = () => {
  const [threat, setThreat] = useState(threatList[2]);

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
        <EuiText className="text-center">{threat.frequency}</EuiText>
      </CardPanel>
    </EuiFlexGroup>
  );
};
