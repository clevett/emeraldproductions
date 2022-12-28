import { EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiText } from "@elastic/eui";
import { useState } from "react";
import {
  threat as threatList,
  encounter as encounterList,
} from "../../../data";
import { CardPanel } from "../../CardPanel";
import { TravelSelect } from "./TravelSelect";

import { DiceTitle } from "./DiceTitle";
import styles from "../styles.module.css";
import { getDiceRollTotal } from "../../../helpers/getDiceRollTotal";
export const RandomEncounter = () => {
  const [threat, setThreat] = useState(threatList[2]);
  const [encounter, setEncounter] = useState<string[]>([]);

  const roll = getDiceRollTotal();

  const handleRoll = (rollResult?: number) => {
    const d20 = rollResult ? rollResult : roll("1d20");
    const key = threat.name as keyof typeof encounterList[number];
    const list = encounterList.find(
      //@ts-expect-error the keys will not be null
      (e) => Array.isArray(e[key]) && e[key].includes(d20)
    );
    if (list?.encounter) {
      setEncounter([...encounter, list.encounter]);
    }
  };

  const renderList = () => {
    return encounter.reverse().map((l, index) => {
      return (
        <EuiFlexItem key={`encounter-list-${index}`}>
          <EuiText className={`text-center`}>
            Encounter {index + 1}: {l}
          </EuiText>
        </EuiFlexItem>
      );
    });
  };

  const list =
    encounter.length < 1 ? (
      <EuiText className="text-center">Roll for an encounters</EuiText>
    ) : (
      renderList()
    );

  const onReset = () => {
    setEncounter([]);
  };

  return (
    <EuiFlexGroup className={`justify-center flex-col`}>
      <EuiFlexItem className={`max-w-xs self-center w-full ${styles.min100}`}>
        <TravelSelect
          list={threatList}
          //@ts-expect-error ignore for now
          onChange={setThreat}
          title="Threat Level"
          value={threat.name}
        />
      </EuiFlexItem>
      <EuiFlexItem className={`flex-col ${styles.min200} content-start`}>
        <CardPanel>
          <EuiFlexGroup className={`flex-col pt-2 content-start`}>
            <DiceTitle
              die="d20"
              onClick={() => handleRoll()}
              onReset={onReset}
              title="Random Encounter"
            />

            <EuiSpacer />
            <EuiText className="text-center italic">
              Frequency is {threat.frequency.toLowerCase()}
            </EuiText>
            <EuiSpacer />

            <EuiFlexGroup className="flex-col">{list}</EuiFlexGroup>
            <EuiSpacer />
          </EuiFlexGroup>
        </CardPanel>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};
