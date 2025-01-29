declare module "@3d-dice/dice-parser-interface" {
  import { RollResults, Notation } from "./dice";

  export default class DiceParser {
    constructor();
    parse(notation: string): DiceResult;

    handleRerolls(results: RollResults): Notation[];

    parseFinalResults(results: RollResults): RollResults;

    parseNotation(notation: Notation): Notation[];
  }
}
