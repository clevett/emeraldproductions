import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  euiSelectableTemplateSitewideRenderOptions,
  EuiText,
  EuiTitle,
} from "@elastic/eui";
import { useEffect, useState } from "react";
import { CardPanel } from "../../CardPanel";
import { TerrainType, Weather as WeatherType } from "../TravelTool";
import { NavigatorSwitch } from "./NavigatorSwitch";

import styles from "../styles.module.css";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { terrain, Terrain, Weather } from "../../../data";

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
  const terrainBanes = terrain.map((t) => getBane(t.name));
  return terrainBanes.reduce((a, b) => a + b, 0) + getBane(weather.name);
};

export const GettingLost = ({ terrain, weather }: GettingLostProps) => {
  const [navigator, setNavigator] = useState(false);
  const [boon, setBoon] = useState(getBoons(terrain));
  const [bane, setBanes] = useState(getBanes(terrain, weather));

  useEffect(() => {
    const banes = getBanes(terrain, weather);
    const boons = getBoons(terrain);
    setBoon(boons);
    setBanes(banes);
  }, [terrain, weather]);

  const roll = (notation: string) => new DiceRoll(notation).total;

  const handleRoll = (roll: number) => {
    console.log(roll);
  };

  const handleNavigator = () => {
    !navigator ? setBoon(boon + 3) : setBoon(boon - 3);
    setNavigator(!navigator);
  };

  return (
    <EuiFlexGroup className="justify-center flex-col">
      <EuiFlexItem
        className={`grid grid-cols-3 center justify-items-center ${styles.min60} content-center`}
      >
        <NavigatorSwitch onChange={handleNavigator} />
        <EuiText>Boon: {getBoons(terrain)}</EuiText>
        <EuiText>Bane: {bane}</EuiText>
      </EuiFlexItem>
      <CardPanel>
        <EuiFlexGroup className="flex-col pt-2">
          <EuiTitle className="text-center  w-fit self-center" size="s">
            <EuiButton onClick={() => handleRoll(roll("1d20"))} fill>
              <h4>Getting Lost</h4>
            </EuiButton>
          </EuiTitle>
        </EuiFlexGroup>
      </CardPanel>
    </EuiFlexGroup>
  );
};
