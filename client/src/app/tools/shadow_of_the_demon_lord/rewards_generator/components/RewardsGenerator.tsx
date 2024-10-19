"use client";
import { useState } from "react";
import { Button } from "@/app/components";
import { levels } from "@/app/data";
import { capitalize } from "@/app/tools/utils";

import { Level, LevelSelect } from "./LevelSelect";
import { Treasure } from "../helpers/Treasure";
import { buildResultString } from "../helpers/buildResultString";

import styles from "./RewardsGenerator.module.css";

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
    <div className={`grid gap-4 py-8 px-4 ${styles.card}`}>
      <h4 className="text-lg text-center w-full font-bold">
        Treasure per level at {capitalize(level)} totals {gold} gc
      </h4>

      <div className="w-full text-center">
        <p>{result}</p>
      </div>

      <div className="grid justify-center gap-4 grid-flow-col">
        <p className="max-w-xs">
          <LevelSelect level={level} onChange={onChange} />
        </p>
        <div className="max-w-xs justify-end">
          <Button onClick={handleClick} name=" Generate Treasure" />
        </div>
      </div>
    </div>
  );
};
