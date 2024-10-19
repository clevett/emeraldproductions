export enum Environments {
  ASH_DESERT = "Ash Desert",
  CRUMBLING_RUINS = "Crumbling Ruins",
  DEAD_WOODS = "Dead Woods",
  DECAYED_RUINS = "Decayed Ruins",
  DERELICT_INDUSTRIES = "Derelict Industries",
  GLASIFIED_FIELD = "Glasified Field",
  HUGE_CREATOR = "Huge Crater",
  MARSHLANDS = "Marshlands",
  OVERGROWN_RUINS = "Overgrown Ruins",
  SCRUBLANDS = "Scrublands",
  SETTLEMENT = "Settlement",
  THICK_WOODS = "Thick Woods",
  UNSCATHED_RUINS = "Unscathed Ruins",
}

export type Environment = `${Environments}`;

export type Sector = (typeof sectorEnvironments)[number];

export const sectorEnvironments = [
  {
    result: [11, 12],
    environment: Environments.THICK_WOODS,
    ruin: false,
    threat: true,
    artifact: false,
  },
  {
    result: [13, 14, 15],
    environment: Environments.SCRUBLANDS,
    ruin: false,
    threat: true,
    artifact: false,
  },
  {
    result: [16, 17, 18, 19, 20, 21],
    environment: Environments.MARSHLANDS,
    ruin: false,
    threat: true,
    artifact: false,
  },
  {
    result: [22, 23, 24],
    environment: Environments.DEAD_WOODS,
    ruin: false,
    threat: true,
    artifact: false,
  },
  {
    result: [25, 26],
    environment: Environments.ASH_DESERT,
    ruin: false,
    threat: true,
    artifact: false,
  },
  {
    result: [31],
    environment: Environments.HUGE_CREATOR,
    ruin: false,
    threat: true,
    artifact: false,
  },
  {
    result: [32],
    environment: Environments.GLASIFIED_FIELD,
    ruin: false,
    threat: true,
    artifact: false,
  },
  {
    result: [33, 34, 35],
    environment: Environments.OVERGROWN_RUINS,
    ruin: true,
    threat: true,
    artifact: true,
  },
  {
    result: [36, 37, 38, 39, 40, 41, 42],
    environment: Environments.CRUMBLING_RUINS,
    ruin: true,
    threat: true,
    artifact: true,
  },
  {
    result: [43, 44, 45, 46, 47, 48, 49, 50, 51],
    environment: Environments.DECAYED_RUINS,
    ruin: true,
    threat: true,
    artifact: true,
  },
  {
    result: [52, 53, 54, 55, 56],
    environment: Environments.UNSCATHED_RUINS,
    ruin: true,
    threat: true,
    artifact: true,
  },
  {
    result: [61, 62, 63, 64],
    environment: Environments.DERELICT_INDUSTRIES,
    ruin: true,
    threat: true,
    artifact: true,
  },
  {
    result: [65, 66],
    environment: Environments.SETTLEMENT,
    ruin: null,
    threat: null,
    artifact: null,
  },
];
