"use client";
import { useState } from "react";

import { Card } from "@/app/components";
import { getDiceRollTotal } from "@/app/tools/utils";
import { threat as threatList, encounter as encounterList } from "@/app/data";

import { DiceTitle } from "./DiceTitle";
import { TravelSelect } from "./TravelSelect";

export const RandomEncounter = () => {
  const [threat, setThreat] = useState(threatList[2]);
  const [encounter, setEncounter] = useState<string[]>([]);

  const roll = getDiceRollTotal();

  const handleRoll = (rollResult?: number) => {
    const d20 = rollResult ? rollResult : roll("1d20");
    const key = threat.name as keyof (typeof encounterList)[number];
    const list = encounterList.find(
      (e) => Array.isArray(e[key]) && e[key].includes(d20)
    );
    if (list?.encounter) {
      setEncounter([...encounter, list.encounter]);
    }
  };

  const renderList = () => {
    return encounter.map((l, index) => {
      return (
        <div key={`encounter-list-${index}`}>
          <p className={`text-center`}>
            Encounter {index + 1}: {l}
          </p>
        </div>
      );
    });
  };

  const list =
    encounter.length < 1 ? (
      <p className="text-center">Roll for an encounters</p>
    ) : (
      renderList()
    );

  const onReset = () => {
    setEncounter([]);
  };

  return (
    <div className={`grid gap-4 justify-items-center`}>
      <div className={`max-w-xs w-full`}>
        <TravelSelect
          list={threatList}
          onChange={setThreat}
          title="Threat Level"
          value={threat.name}
        />
      </div>

      <div className={`w-full`}>
        <Card styles="h-full">
          <div className={`grid text-center gap-4`}>
            <DiceTitle
              die="d20"
              onClick={() => handleRoll()}
              onReset={onReset}
              title="Random Encounter"
            />

            <p className="text-center italic">
              Frequency is {threat.frequency.toLowerCase()}
            </p>

            <div className="grid">{list}</div>
          </div>
        </Card>
      </div>
    </div>
  );
};
