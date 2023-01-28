//@ts-expect-error Not typed
import DiceParser from "@3d-dice/dice-parser-interface";
//@ts-expect-error Not typed
import DiceBox from "@3d-dice/dice-box";
import { useEffect, useState } from "react";

export const useDiceRoller = () => {
  const [dicebox, setDicebox] = useState<DiceBox>(undefined);
  const [result, setResult] = useState<unknown>(null);
  const canvasId = "dice-canvas";

  const [canvasElement, setCanvasElement] = useState<
    HTMLCanvasElement | HTMLDivElement | null
  >(null);

  useEffect(() => {
    if (canvasElement === null) {
      return;
    }

    if (dicebox === undefined) {
      init();
    }
  }, [canvasElement, dicebox]);

  // create Dice Roll Parser to handle complex notations
  const DRP = new DiceParser();

  const init = async (themeColor = "#10ae4c") => {
    const Dice = new DiceBox(
      `#${canvasId}`, // target DOM element to inject the canvas for rendering
      {
        assetPath: "/assets/dice-box/",
        delay: 2,
        lightIntensity: 0.9,
        scale: 4,
        spinForce: 5,
        startingHeight: 8,
        themeColor,
        throwForce: 6,
      }
    );

    // initialize the Dice Box outside of the component
    await Dice.init().then(() => setDicebox(Dice));
  };

  if (dicebox) {
    // This method is triggered whenever dice are finished rolling
    dicebox.onRollComplete = (results: unknown) => {
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

  const canvas = (
    <canvas
      id={canvasId}
      className="w-full h-full pointer-events-none absolute z-10 top-0 left-0"
      ref={setCanvasElement}
    />
  );

  return {
    init,
    roll,
    dicebox,
    canvasId,
    result,
    canvas,
  };
};