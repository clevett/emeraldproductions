import {
  EuiTitle,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFieldText,
  EuiText,
} from "@elastic/eui";
import { CardPanel } from "../CardPanel";
import { LayoutBody } from "../LayoutBody";
import { SmallTitle } from "./components/SmallTitle";
import {
  pace as paceList,
  terrain as terrainList,
  threat as threatList,
  weather as weatherList,
} from "../../data";
import { useState } from "react";

import { NavigatorSwitch } from "./components/NavigatorSwitch";
import { RandomEncounter } from "./components/RandomEncounter";
import { TerrainSwitch } from "./components/TerrainSwitch";
import { TravelSelect } from "./components/TravelSelect";

import styles from "./styles.module.css";

export type TerrainType = { name: string; multiplier: number };

export type Pace = typeof paceList[number];

export type Weather = typeof weatherList[number];

export type Threat = typeof threatList[number];

export const TravelTool = () => {
  const [miles, setMiles] = useState<number>(30);
  const [pace, setPace] = useState(paceList[0]);
  const [terrain, setTerrain] = useState<TerrainType[]>([]);
  const [weather, setWeather] = useState(weatherList[3]);
  const [navigator, setNavigator] = useState(false);
  const [boon, setBoon] = useState(0);
  const [bane, setBane] = useState(0);

  const multiplier = [...terrain, weather]
    .map((t) => t.multiplier)
    .reduce((a, b) => a + b, 0);

  const roundMath = (num: number) =>
    Math.round((num + Number.EPSILON) * 100) / 100;
  const milesPerHour = roundMath(pace.hour / multiplier);
  const milesPerDay = pace.day ? roundMath(pace.day / multiplier) : "-";
  const distance =
    typeof milesPerDay === "number" ? roundMath(miles / milesPerDay) : "-";

  const onTerrainChange = (t: TerrainType) => {
    if (!terrain.includes(t)) {
      setTerrain([...terrain, t]);
    } else {
      const filtered = terrain.filter((e) => e !== t);
      setTerrain(filtered);
    }
  };

  return (
    <LayoutBody
      DriveThruId="155572"
      subtitle="Travel Tool"
      title="Shadow of the Demon Lord"
    >
      <EuiFlexGroup className="flex-row justify-start gap-4 mb-6 wrap">
        <EuiFlexItem className="max-w-xs  pl-4">
          <SmallTitle name="Terrain" />
          <EuiFlexGroup className="grid-cols-2 grid gap-4 mb-6 mt-4">
            {terrainList.map((t: TerrainType) => {
              return (
                <TerrainSwitch
                  key={`terrain-list-${t.name}`}
                  onChange={() => onTerrainChange(t)}
                  terrain={t}
                />
              );
            })}
          </EuiFlexGroup>
        </EuiFlexItem>
        <EuiFlexItem className="max-w-xs">
          <TravelSelect
            list={paceList}
            //@ts-expect-error ignore for now
            onChange={setPace}
            title="Pace"
            value={pace.name}
          />
        </EuiFlexItem>
        <EuiFlexItem className="max-w-xs">
          <TravelSelect
            list={weatherList}
            //@ts-expect-error ignore for now
            onChange={setWeather}
            title="Weather"
            value={weather.name}
          />
        </EuiFlexItem>
        <EuiFlexItem className="max-w-xs">
          <SmallTitle name="Miles To Travel" />
          <EuiFieldText
            className="text-center"
            aria-label="miles to travel"
            onChange={(e) => setMiles(parseInt(e.target.value))}
            placeholder="0"
            value={miles}
          />
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFlexGroup className="flex-row justify-start gap-4 wrap">
        <CardPanel>
          <EuiTitle className="text-center" size="s">
            <h4>Miles per Hour</h4>
          </EuiTitle>
          <EuiSpacer />
          <EuiText className="text-center">{milesPerHour}</EuiText>
        </CardPanel>

        <EuiSpacer />

        <CardPanel>
          <EuiTitle className="text-center" size="s">
            <h4>Miles per Day</h4>
          </EuiTitle>
          <EuiSpacer />
          <EuiText className="text-center">{milesPerDay}</EuiText>
        </CardPanel>

        <EuiSpacer />

        <CardPanel>
          <EuiTitle className="text-center" size="s">
            <h4>Time to Travel {miles} Miles</h4>
          </EuiTitle>
          <EuiSpacer />
          <EuiText className="text-center">{distance}</EuiText>
        </CardPanel>
      </EuiFlexGroup>

      <EuiSpacer />
      <hr className="mt-4 mb-4" />
      <EuiSpacer />

      <EuiFlexGroup className="flex-row mb-2 justify-start gap-4 wrap">
        <RandomEncounter />

        <EuiSpacer />

        <EuiFlexGroup className="justify-center flex-col">
          <EuiFlexItem
            className={`grid grid-cols-3 center justify-items-center ${styles.min60} content-center`}
          >
            <NavigatorSwitch onChange={setNavigator} />
            <EuiText>Boon: {boon}</EuiText>
            <EuiText>Bane: {bane}</EuiText>
          </EuiFlexItem>
          <CardPanel>
            <EuiTitle className="text-center" size="s">
              <h4>Getting Lost</h4>
            </EuiTitle>
          </CardPanel>
        </EuiFlexGroup>
      </EuiFlexGroup>
    </LayoutBody>
  );
};
