import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";

import { CardPanel } from "../../CardPanel";
import { TerrainType, Weather as WeatherType } from "../TravelTool";
import { NavigatorSwitch } from "./NavigatorSwitch";

import styles from "../styles.module.css";
import { Terrain, Weather } from "../../../data";
import { AnimatedDie } from "../../AnimatedDie/AnimatedDie";
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
  const roll = (notation: string) => new DiceRoll(notation).total;
  const [navigator, setNavigator] = useState(false);
  const [lost, setLost] = useState("Roll to see if you get lost...");

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
    setLost(state);
  };

  const handleNavigator = () => setNavigator(!navigator);

  return (
    <EuiFlexGroup className="justify-center flex-col">
      <EuiFlexItem
        className={`grid grid-cols-3 center justify-items-center ${styles.min60} content-center`}
      >
        <NavigatorSwitch onChange={handleNavigator} />
        <EuiText>Boon: {boons}</EuiText>
        <EuiText>Bane: {banes}</EuiText>
      </EuiFlexItem>
      <CardPanel>
        <EuiFlexGroup className="flex-col pt-2">
          <DiceTitle die="d20" onClick={handleRoll} title="Getting Lost" />
          <EuiSpacer />
          <EuiText className="text-center">{lost}</EuiText>
          <EuiSpacer />
        </EuiFlexGroup>
      </CardPanel>
    </EuiFlexGroup>
  );
};
