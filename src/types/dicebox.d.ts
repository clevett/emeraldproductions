declare module "@3d-dice/dice-box" {
  import { Notation, RollResults } from "./dice";

  const Notation: Notation;

  export default class DiceBox {
    constructor(
      selector: string,
      options: {
        assetPath: string;
        delay: number;
        lightIntensity: number;
        scale: number;
        spinForce: number;
        startingHeight: number;
        themeColor: string;
        throwForce: number;
      }
    );

    init(): Promise<void>;
    show(): this;
    add(notation: Notation, groupId?: number | string): this;
    roll(notation: Notation): this;
    clear(): void;
    onRollComplete: (results: RollResults[]) => void;
  }
}
