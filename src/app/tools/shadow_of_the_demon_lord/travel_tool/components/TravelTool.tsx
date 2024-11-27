"use client";
import { useState } from "react";

import { Callout, Card, Heading, Input, Switch } from "@/components";
import {
  pace as paceList,
  terrain as terrainList,
  weather as weatherList,
} from "@/data";

import { RandomEncounter } from "./RandomEncounter";
import { TravelSelect } from "./TravelSelect";
import { GettingLost } from "./GettingLost";

import { determineTravelTime } from "../utils/determine_travel_time";

import { TerrainType } from "../types";

export const TravelTool = () => {
  const [miles, setMiles] = useState(30);
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
    <div className="grid gap-6 auto-rows-max items-start">
      <div className="flex flex-row flex-wrap gap-6">
        <div className="flex flex-row flex-wrap gap-6">
          <Card type="business" styles="grid gap-6 content-center text-center">
            <div className="grid gap-6">
              <Heading as="h4" size="5">
                Time to Travel {miles} Miles
              </Heading>
              <p>{distance}</p>
            </div>
            <div className="grid grid-flow-col gap-6">
              <div>
                <Heading as="h5" size="2">
                  Miles per Hour:
                </Heading>
                <p className="text-center">{milesPerHour}</p>
              </div>
              <div>
                <Heading as="h5" size="2">
                  Miles per Day:
                </Heading>
                <p className="text-center">{milesPerDay}</p>
              </div>
            </div>
          </Card>

          <div className="grid gap-2 items-start auto-rows-max">
            <Heading as="h3">Terrain</Heading>
            <div className={`grid gap-2 items-start`}>
              {terrainList.map((t: TerrainType) => {
                return (
                  <Switch
                    key={`terrain-list-${t.name}`}
                    label={t.name}
                    onChange={() => onTerrainChange(t)}
                    size="3"
                    textSize="3"
                  />
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 auto-rows-max">
            <div className="max-w-xs min-w-fit">
              <Heading as="h3" className="text-center">
                Miles To Travel
              </Heading>
              <Input
                styles="text-center"
                label="miles to travel"
                submit={(value: string) => setMiles(parseInt(value))}
                placeholder="0"
                min={1}
                defaultValue="30"
              />
            </div>

            <div className="grid gap-4 grid-flow-col auto-cols-max">
              <div className="grid gap-4 max-w-xs min-w-fit">
                <TravelSelect
                  list={paceList}
                  onChange={setPace}
                  title="Pace"
                  value={pace.name}
                />
              </div>

              <div className="grid gap-4 max-w-xs min-w-fit">
                <TravelSelect
                  list={weatherList}
                  onChange={setWeather}
                  title="Weather"
                  value={weather.name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wap gap-4 items-start">
        <RandomEncounter />
        <GettingLost terrain={terrain} weather={weather} />
      </div>
    </div>
  );
};
