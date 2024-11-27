import {
  pace as paceList,
  threat as threatList,
  weather as weatherList,
} from "@/data";

export type TerrainType = { name: string; multiplier: number };

export type Pace = (typeof paceList)[number];

export type Weather = (typeof weatherList)[number];

export type Threat = (typeof threatList)[number];
