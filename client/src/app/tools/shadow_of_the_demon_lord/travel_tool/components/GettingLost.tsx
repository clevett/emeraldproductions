"use client";
import { useState } from "react";

import { Callout, Card, Heading, Switch } from "@/app/components";
import { getDiceRollTotal } from "@/app/tools/utils";
import { Terrain, Weather } from "@/app/data";

import { TerrainType, Weather as WeatherType } from "../types";

import { DiceTitle } from "./DiceTitle";

type GettingLostProps = {
  terrain: TerrainType[];
  weather: WeatherType;
};

const getBane = (string: TerrainType["name"] | WeatherType["name"]): number => {
  switch (string) {
    case Weather.POWERFUL_STORM:
      return 3;
    case Terrain.FOREST:
    case Terrain.MOUNTAINS:
    case Terrain.SWAMP:
    case Weather.STORM:
      return 2;
    case Terrain.DESERT:
    case Terrain.HILLS:
    case Weather.PRECIPITATION:
      return 1;
    default:
      return 0;
  }
};

const getBoons = (terrain: TerrainType[]) =>
  terrain.find((t) => t.name === Terrain.PLAINS) ? 1 : 0;

const getBanes = (terrain: TerrainType[], weather: WeatherType) => {
  const terrainBanes = [...terrain, weather].map((t) => getBane(t.name));
  return terrainBanes.reduce((a, b) => a + b, 0);
};

export const GettingLost = ({ terrain, weather }: GettingLostProps) => {
  const roll = getDiceRollTotal();
  const [navigator, setNavigator] = useState(false);
  const [lost, setLost] = useState<string[]>([]);

  const banes = getBanes(terrain, weather);

  const navigatorBonus = navigator ? 3 : 0;
  const boons = getBoons(terrain) + navigatorBonus;

  const handleRoll = (rollResult?: number) => {
    const d20 = rollResult ? rollResult : roll("1d20");
    const totalDice = boons - banes;
    const d6 = totalDice ? roll(`${Math.abs(totalDice)}d6kh1`) : 0;
    const result = totalDice > 0 ? d20 + d6 : totalDice < 0 ? d20 - d6 : d20;
    const state =
      result < 10 ? "You are lost" : "You move in the direction you intended";
    setLost([...lost, state]);
  };

  const handleNavigator = () => setNavigator(!navigator);

  const renderList = () => {
    return lost.map((l, index) => {
      return (
        <div key={`lost-list-${index}`}>
          <p className="text-center">
            Day {index + 1}: {l}
          </p>
        </div>
      );
    });
  };

  const list =
    lost.length < 1 ? (
      <p className="text-center">Roll to see if you get lost...</p>
    ) : (
      renderList()
    );

  const onReset = () => {
    setLost([]);
  };

  const terrainCallout =
    terrain.length > 0 || weather.name !== Weather.NORMAL
      ? `${weather.name} ${terrain.map((t) => t.name).join(", ")}`
      : "Toggle terrain and change weather to see the effects of getting lost.";

  return (
    <div className={`grid gap-y-4 gap-x-4 justify-items-center`}>
      <Heading as="h3" className="text-center">
        Getting Lost
      </Heading>

      <div className="grid gap-4 items-start w-full ">
        <Callout>
          <span>{terrainCallout}</span>
        </Callout>

        <div className="grid grid-flow-col gap-x-6 justify-items-center content-center w-full min-h-8">
          <Switch
            defaultChecked={navigator}
            label="Navigator"
            onChange={handleNavigator}
          />
          <p>Boon: {boons}</p>
          <p>Bane: {banes}</p>
        </div>

        <DiceTitle
          die="d20"
          onClick={() => handleRoll()}
          onReset={onReset}
          title="Roll Navigation"
        />
      </div>

      <Card type="business" height="auto">
        <div className="py-4 px-2">{list}</div>
      </Card>
    </div>
  );
};
