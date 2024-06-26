import { EuiFlexItem, EuiPanel, EuiSpacer, EuiText } from "@elastic/eui";
import { useState } from "react";

import { TerrainType, Weather as WeatherType } from "../TravelTool";
import { NavigatorSwitch } from "./NavigatorSwitch";

import styles from "../styles.module.css";
import { Terrain, Weather } from "../../../data";
import { DiceTitle } from "./DiceTitle";
import { getDiceRollTotal } from "../../../helpers/getDiceRoll";

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
        <EuiFlexItem key={`lost-list-${index}`}>
          <EuiText className={`text-center`}>
            Day {index + 1}: {l}
          </EuiText>
        </EuiFlexItem>
      );
    });
  };

  const list =
    lost.length < 1 ? (
      <EuiText className="text-center">Roll to see if you get lost...</EuiText>
    ) : (
      renderList()
    );

  const onReset = () => {
    setLost([]);
  };

  return (
    <div
      className={`grid gap-y-4 gap-x-4 justify-items-center ${styles.encounterCard}`}
    >
      <div
        className={`grid grid-cols-3 gap-x-6 justify-items-center ${styles.min100} content-center mb-4 w-full`}
      >
        <NavigatorSwitch onChange={handleNavigator} />
        <EuiText>Boon: {boons}</EuiText>
        <EuiText>Bane: {banes}</EuiText>
      </div>

      <div className={`${styles.minH200} w-full`}>
        <EuiPanel hasBorder paddingSize="m" color="subdued" className="h-full">
          <div className={`grid text-center ${styles.minW500}}`}>
            <DiceTitle
              die="d20"
              onClick={() => handleRoll()}
              onReset={onReset}
              title="Getting Lost"
            />

            <EuiSpacer />

            {list}
          </div>
        </EuiPanel>
      </div>
    </div>
  );
};
