"use client";
import { useState } from "react";

import { Card, Input, Switch } from "@/app/components";
import {
  pace as paceList,
  terrain as terrainList,
  weather as weatherList,
} from "@/app/data";

import { RandomEncounter } from "./RandomEncounter";
import { TravelSelect } from "./TravelSelect";

import { determineTravelTime } from "../utils/determine_travel_time";
import { GettingLost } from "./GettingLost";
import { Footer } from "./Footer";

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
    <div>
      <div className="flex flex-row flex-wrap">
        <div className="max-w-xs pl-4 min-w-fit">
          <h3>Terrain</h3>
          <div className={`grid gap-y-2 gap-x-4`}>
            {terrainList.map((t: TerrainType) => {
              return (
                <Switch
                  key={`terrain-list-${t.name}`}
                  onChange={() => onTerrainChange(t)}
                  label={t.name}
                />
              );
            })}
          </div>
        </div>

        <div className="max-w-xs min-w-fit">
          <TravelSelect
            list={paceList}
            onChange={setPace}
            title="Pace"
            value={pace.name}
          />
        </div>

        <div className="max-w-xs min-w-fit">
          <TravelSelect
            list={weatherList}
            onChange={setWeather}
            title="Weather"
            value={weather.name}
          />
        </div>

        <div className="max-w-xs min-w-fit">
          <h3>Miles To Travel</h3>
          <Input
            styles="text-center"
            label="miles to travel"
            submit={(value: string) => setMiles(parseInt(value))}
            placeholder="0"
            min={1}
          />
        </div>
      </div>

      <div className="flex flex-row flex-wrap">
        <Card>
          <h4>Miles per Hour</h4>
          <p className="text-center">{milesPerHour}</p>
        </Card>

        <Card>
          <h4>Miles per Day</h4>
          <p className="text-center">{milesPerDay}</p>
        </Card>

        <Card>
          <h4>Time to Travel {miles} Miles</h4>
          <p className="text-center">{distance}</p>
        </Card>
      </div>

      <hr className="mt-4 mb-4" />

      <div>
        <div className="max-w-l min-w-fit">
          <RandomEncounter />
        </div>
        <div className="max-w-l min-w-fit">
          <GettingLost terrain={terrain} weather={weather} />
        </div>
      </div>

      <Footer />
    </div>
  );
};
