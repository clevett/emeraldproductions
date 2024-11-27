import { ftdMonsters } from "@/data/ftdMonsters";

const findMonsterMath = (hd: number) => {
  const monsterMath = ftdMonsters.find((element) => element["hd"] === hd);
  return monsterMath ? monsterMath : ftdMonsters[0];
};

export default findMonsterMath;
