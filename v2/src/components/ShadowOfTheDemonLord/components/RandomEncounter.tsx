import {
  EuiButton,
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

import { AnimatedDie } from "../../AnimatedDie/AnimatedDie";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";

export const RandomEncounter = () => {
  const [threat, setThreat] = useState(threatList[2]);
  const [encounter, setEncounter] = useState("Roll for an encounter");

  const roll = (notation: string) => new DiceRoll(notation).total;

  const handleRoll = (roll: number) => {
    const key = threat.name as keyof typeof encounterList[number];
    const list = encounterList.find(
      //@ts-expect-error the keys will not be null
      (e) => Array.isArray(e[key]) && e[key].includes(roll)
    );
    if (list?.encounter) {
      setEncounter(list?.encounter);
    }
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
        <EuiFlexGroup className="flex-col pt-2">
          <EuiTitle className="text-center w-fit self-center" size="s">
            <EuiButton onClick={() => handleRoll(roll("1d20"))} fill>
              <h4>Random Encounter</h4>
            </EuiButton>
          </EuiTitle>
          <EuiSpacer />
          <EuiText className="text-center italic">{threat.frequency}</EuiText>
          <EuiSpacer />
          <EuiText className="text-center">{encounter}</EuiText>
          <EuiFlexItem className="items-center w-full mt-4">
            <AnimatedDie dieSize="d20" onRoll={handleRoll} />
          </EuiFlexItem>
        </EuiFlexGroup>
      </CardPanel>
    </EuiFlexGroup>
  );
};
