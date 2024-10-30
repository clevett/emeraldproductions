import { getD666 } from "./getD666";

import { artifacts } from "../../../../data/myz_artifacts";

export const getArtifactCount = (roll: number[]) =>
  roll.filter((e: number) => e === 6).length;

const betweenInt = (r: number, min: number, max: number) =>
  r >= min && r <= max;

export const getArtifacts = (num: number) => {
  const a = [];
  for (let i = 0; i < num; i++) {
    let roll = getD666();
    let i = 1;

    const reRoll = roll >= 643;
    if (reRoll) {
      do {
        roll = getD666();
        i++;
      } while (!reRoll || i < 5);
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
