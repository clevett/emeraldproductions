import { danger } from "@/data";

import { Actions, Levels } from "../enums";

export interface Monster {
  _id: string;
  descriptor: string;
  difficulty: number;
  name: string;
  source: string;
}

export type Action = `${Actions}`;

export type Level = keyof typeof danger;

export type Difficulty = keyof (typeof danger)[Levels.STARTING];

export type Danger = (typeof danger)[Levels.STARTING];

export type MinMax = { min: number; max: number | null };

export type Filter = "descriptor" | "source" | "difficulty";
export type Value = string | number | undefined;

export type Filters = { [key in Filter]: Value };
