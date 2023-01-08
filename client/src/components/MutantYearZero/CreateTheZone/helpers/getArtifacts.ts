import { getD666 } from "./getD666";

import { artifacts } from "../data/artifacts";

export const getArtifactCount = (roll: number[]) =>
  roll.filter((e: number) => e === 6).length;

const betweenInt = (r: number, min: number, max: number) =>
  r >= min && r <= max;

export const getArtifacts = (num: number) => {
  const a = [];
  for (let i = 0; i < num; i++) {
    let roll = getD666();

    if (betweenInt(roll, 432, 666)) {
      roll = Math.floor(Math.random() * 642);
    }

    const artifact = artifacts.find((e) => {
      const [min, max] = e.result;
      return betweenInt(roll, min, max);
    });

    if (artifact) {
      a.push(artifact.name);
    } else {
      console.warn(`MYZ: Artifact not found for ${roll}`);
    }
  }
  return a;
};
