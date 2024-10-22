"use client";
import { useState } from "react";

import { Callout, Card } from "@/app/components";
import { getDiceRollTotal } from "@/app/tools/utils";
import { threat as threatList, encounter as encounterList } from "@/app/data";

import { DiceTitle } from "./DiceTitle";
import { TravelSelect } from "./TravelSelect";
import { Heading } from "@radix-ui/themes";

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
      <Heading as="h3" className="text-center">
        Random Encounters
      </Heading>

      <div className="grid gap-4 items-start">
        <div className="grid gap-4 grid-flow-col items-start  ">
          <TravelSelect
            list={threatList}
            onChange={setThreat}
            title="Threat Level"
            value={threat.name}
          />
        </div>
        <Callout>
          <span>Frequency is {threat.frequency.toLowerCase()}</span>
        </Callout>

        <DiceTitle
          die="d20"
          onClick={() => handleRoll()}
          onReset={onReset}
          title="Roll Encounter"
        />
      </div>

      <Card type="business" height="auto">
        <div className="grid text-center gap-4">
          <div className="grid">{list}</div>
        </div>
      </Card>
    </div>
  );
};
