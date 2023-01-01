import { getD666 } from "./getD666";

export const getArtifacts = (num: number) => {
  const a = [];
  for (let i = 0; i < num; i++) {
    a.push(getD666());
  }
  return a;
};
