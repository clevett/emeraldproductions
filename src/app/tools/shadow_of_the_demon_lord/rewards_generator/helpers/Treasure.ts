import { Level } from "../components/LevelSelect";

export class Treasure {
  groupLevel: string;
  totalGold: number;
  coinRolls:
    | { bit: string; cp: string; ss: string; gc: null }
    | { bit: string; cp: string; ss: string; gc: string }
    | { bit: null; cp: null; ss: string; gc: string }
    | { bit: null; cp: null; ss: null; gc: null };
  constructor(name: Level) {
    this.groupLevel = name;
    this.totalGold = this.determineTotalGold();
    this.coinRolls = this.determineCoins();
  }

  get name() {
    return this.groupLevel;
  }
  get gold() {
    return this.totalGold;
  }
  get coins() {
    return this.coinRolls;
  }

  determineTotalGold = () => {
    switch (this.name) {
      case "starting":
        return 1;
      case "novice":
        return 5;
      case "expert":
        return 50;
      case "master":
        return 500;
      default:
        return 0;
    }
  };

  determineCoins = () => {
    switch (this.name) {
      case "starting":
        return {
          bit: "3d6",
          cp: "6d6",
          ss: "2d6",
          gc: null,
        };
      case "novice":
        return {
          bit: "2d6",
          cp: "2d6",
          ss: "6d6",
          gc: "3d6",
        };
      case "expert":
        return {
          bit: null,
          cp: null,
          ss: "8d6",
          gc: "5d6",
        };
      case "master":
        return {
          bit: null,
          cp: null,
          ss: "12d6",
          gc: "8d6",
        };
      default:
        return {
          bit: null,
          cp: null,
          ss: null,
          gc: null,
        };
    }
  };

  deleteNullCoins = () => {
    const newCoins = { ...this.coins };

    for (const [key, value] of Object.entries(newCoins)) {
      if (value === null) {
        //@ts-expect-error index error
        delete newCoins[key];
      }
    }

    return newCoins;
  };
}
