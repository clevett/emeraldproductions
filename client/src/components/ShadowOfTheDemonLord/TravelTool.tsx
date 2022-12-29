import {
  EuiTitle,
  EuiSpacer,
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

import { RandomEncounter } from "./components/RandomEncounter";
import { Switch } from "../Switch";
import { TravelSelect } from "./components/TravelSelect";

import { determineTravelTime } from "./helpers/determineTravelTime";
import { GettingLost } from "./components/GettingLost";
import { Footer } from "./components/Footer";
import { FlexRowGroup } from "../Styled/FlexRowGroup";

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

  const multiplier = [...terrain, weather]
    .map((t) => t.multiplier)
    .reduce((a, b) => a * b);

  const roundMath = (num: number) =>
    Math.round((num + Number.EPSILON) * 100) / 100;
  const milesPerHour = roundMath(pace.hour / multiplier);
  const milesPerDay = pace.day ? roundMath(pace.day / multiplier) : "-";
  const distance = determineTravelTime(milesPerHour, miles);

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
      <FlexRowGroup>
        <EuiFlexItem className="max-w-xs pl-4 min-w-fit">
          <SmallTitle name="Terrain" />
          <EuiSpacer size="s" />
          <div className={`grid gap-y-2 gap-x-4 ${styles.terrainGrid}`}>
            {terrainList.map((t: TerrainType) => {
              return (
                <Switch
                  key={`terrain-list-${t.name}`}
                  onChange={() => onTerrainChange(t)}
                  name={t.name}
                />
              );
            })}
          </div>
        </EuiFlexItem>

        <EuiFlexItem className="max-w-xs min-w-fit">
          <TravelSelect
            list={paceList}
            //@ts-expect-error ignore for now
            onChange={setPace}
            title="Pace"
            value={pace.name}
          />
        </EuiFlexItem>

        <EuiFlexItem className="max-w-xs min-w-fit">
          <TravelSelect
            list={weatherList}
            //@ts-expect-error ignore for now
            onChange={setWeather}
            title="Weather"
            value={weather.name}
          />
        </EuiFlexItem>

        <EuiFlexItem className="max-w-xs min-w-fit">
          <SmallTitle name="Miles To Travel" />
          <EuiSpacer size="s" />
          <EuiFieldText
            className="text-center"
            aria-label="miles to travel"
            onChange={(e) => setMiles(parseInt(e.target.value))}
            placeholder="0"
            value={miles}
          />
        </EuiFlexItem>
      </FlexRowGroup>

      <EuiSpacer />

      <FlexRowGroup>
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
      </FlexRowGroup>

      <EuiSpacer />
      <hr className="mt-4 mb-4 max-w-7xl min-w-fit" />
      <EuiSpacer />

      <FlexRowGroup>
        <EuiFlexItem className="max-w-l min-w-fit">
          <RandomEncounter />
        </EuiFlexItem>
        <EuiFlexItem className="max-w-l min-w-fit">
          <GettingLost terrain={terrain} weather={weather} />
        </EuiFlexItem>
      </FlexRowGroup>

      <Footer />
    </LayoutBody>
  );
};
