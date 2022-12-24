import {
  EuiTitle,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSelect,
  EuiFieldText,
} from "@elastic/eui";
import { CardPanel } from "../CardPanel";
import { LayoutBody } from "../LayoutBody";
import { SmallTitle } from "./components/SmallTitle";
import {
  pace as paceList,
  terrain as terrainList,
  threat as threatList,
  weather as weatherList,
} from "../../data/sotdlTravel";
import { useState } from "react";
import { TerrainSwitch } from "./components/TerrainSwitch";

export type TerrainType = { name: string; multiplier: number };

export const TravelTool = () => {
  const [weather, setWeather] = useState(weatherList[3].name);
  const [pace, setPace] = useState(paceList[0].name);
  const [terrain, setTerrain] = useState<TerrainType[]>([]);
  const [threat, setThreat] = useState(threatList[2].name);
  const [miles, setMiles] = useState<number>();

  const onTerrainChange = (t: TerrainType) => {
    if (terrain.includes(t)) {
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
          <SmallTitle name="Pace" />
          <EuiSelect
            className="capitalize text-center"
            onChange={(e) => setPace(e.target.value)}
            options={paceList.map(({ name }) => ({ name, text: name }))}
            value={pace}
          />
        </EuiFlexItem>
        <EuiFlexItem className="max-w-xs">
          <SmallTitle name="Weather" />
          <EuiSelect
            className="capitalize text-center"
            onChange={(e) => setWeather(e.target.value)}
            options={weatherList.map(({ name }) => ({ name, text: name }))}
            value={weather}
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

      <EuiFlexGroup className="flex-row justify-start gap-4">
        <CardPanel>
          <EuiTitle className="text-center" size="s">
            <h4>Miles per Hour</h4>
          </EuiTitle>
        </CardPanel>

        <EuiSpacer />

        <CardPanel>
          <EuiTitle className="text-center" size="s">
            <h4>Miles per Day</h4>
          </EuiTitle>
        </CardPanel>

        <EuiSpacer />

        <CardPanel>
          <EuiTitle className="text-center" size="s">
            <h4>Time to Travel 30 Miles</h4>
          </EuiTitle>
        </CardPanel>
      </EuiFlexGroup>

      <EuiSpacer />
      <hr />
      <EuiSpacer />

      <EuiFlexGroup className="flex-row justify-start gap-4 mb-6 wrap">
        <EuiFlexItem className="max-w-xs">
          <SmallTitle name="Threat Level" />
          <EuiSelect
            className="capitalize"
            onChange={(e) => setThreat(e.target.value)}
            options={threatList.map(({ name }) => ({ name, text: name }))}
            value={threat}
          />
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFlexGroup className="flex-row mb-2 justify-start gap-4 wrap">
        <CardPanel>
          <EuiTitle className="text-center" size="s">
            <h4>Random Encounter</h4>
          </EuiTitle>
        </CardPanel>

        <EuiSpacer />

        <CardPanel>
          <EuiTitle className="text-center" size="s">
            <h4>Getting Lost</h4>
          </EuiTitle>
        </CardPanel>
      </EuiFlexGroup>
    </LayoutBody>
  );
};
