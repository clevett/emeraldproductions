//@ts-expect-error Not typed
import DiceParser from "@3d-dice/dice-parser-interface";
//@ts-expect-error Not typed
import DiceBox from "@3d-dice/dice-box";
import { useState } from "react";

export const useDiceRoller = () => {
  const canvasId = "dice-canvas";
  const [dicebox, setDicebox] = useState<DiceBox>(undefined);
  const [result, setResult] = useState<unknown>(null);

  // create Dice Roll Parser to handle complex notations
  const DRP = new DiceParser();

  const init = async () => {
    const Dice = new DiceBox(
      `#${canvasId}`, // target DOM element to inject the canvas for rendering
      {
        assetPath: "/assets/dice-box/",
        startingHeight: 8,
        throwForce: 6,
        spinForce: 5,
        lightIntensity: 0.9,
        delay: 2,
        scale: 4,
        themeColor: "#10ae4c",
      }
    );

    // initialize the Dice Box outside of the component
    await Dice.init().then(() => setDicebox(Dice));
  };

  if (dicebox) {
    // This method is triggered whenever dice are finished rolling
    dicebox.onRollComplete = (results: unknown) => {
      console.log(results);

      // handle any rerolls
      const rerolls = DRP.handleRerolls(results);
      if (rerolls.length) {
        rerolls.forEach((roll: { groupId: unknown }) =>
          dicebox.add(roll, roll.groupId)
        );
        return rerolls;
      }
      // if no rerolls needed then parse the final results
      const finalResults = DRP.parseFinalResults(results);
      setResult(finalResults);
    };
  }

  // trigger dice roll
  const roll = (notation: string) =>
    dicebox.show().roll(DRP.parseNotation(notation));

  return {
    init,
    roll,
    dicebox,
    canvasId,
    result,
  };
};
