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

import styles from "../styles.module.css";

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
          <EuiFlexItem className={`grid ${styles.colfit} gap-x-1.5`}>
            <EuiTitle className="text-center w-fit self-center" size="s">
              <EuiButton
                className="col-start-2 justify-self-center"
                onClick={() => handleRoll(roll("1d20"))}
                fill
              >
                <h4>Random Encounter</h4>
              </EuiButton>
            </EuiTitle>
            <EuiFlexItem className="justify-self-start">
              <AnimatedDie dieSize="d20" onRoll={handleRoll} />
            </EuiFlexItem>
          </EuiFlexItem>

          <EuiSpacer />
          <EuiText className="text-center italic">{threat.frequency}</EuiText>
          <EuiSpacer />

          <EuiText className="text-center">{encounter}</EuiText>
          <EuiSpacer />
        </EuiFlexGroup>
      </CardPanel>
    </EuiFlexGroup>
  );
};
