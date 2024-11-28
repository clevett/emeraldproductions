"use client";
import { useState } from "react";
import { Button, Card, Heading } from "@/components";
import { levels } from "@/data";
import { capitalize } from "@/app/tools/utils";

import { Level, LevelSelect } from "./LevelSelect";
import { Treasure } from "../helpers/Treasure";
import { buildResultString } from "../helpers/buildResultString";

const getTreasure = (gold: number, level: Level) => {
  const treasure = new Treasure(level);
  return buildResultString(gold, treasure.deleteNullCoins());
};

export const RewardsGenerator = () => {
  const [level, setLevel] = useState<Level>(levels[1]);
  const [gold, setGold] = useState(5);
  const [result, setResult] = useState(getTreasure(gold, level));

  const handleClick = () => {
    setResult(getTreasure(gold, level));
  };

  const onChange = (level: Level) => {
    const treasure = new Treasure(level);
    setLevel(level);
    setGold(treasure.gold);
    setResult(getTreasure(gold, level));
  };

  return (
    <Card styles="grid gap-4 py-8 px-4" type="business">
      <Heading as="h3" className="text-center w-full">
        Treasure per level at {capitalize(level)} totals {gold} gc
      </Heading>

      <div className="w-full text-center">
        <p>{result}</p>
      </div>

      <div className="grid justify-center gap-4 grid-flow-col">
        <div className="max-w-xs">
          <LevelSelect level={level} onChange={onChange} />
        </div>
        <div className="max-w-xs justify-end">
          <Button onClick={handleClick} name=" Generate Treasure" />
        </div>
      </div>
    </Card>
  );
};
