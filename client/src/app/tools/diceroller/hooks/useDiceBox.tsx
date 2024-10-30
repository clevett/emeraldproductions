//@ts-expect-error Not typed
import DiceParser from "@3d-dice/dice-parser-interface";
//@ts-expect-error Not typed
import DiceBox from "@3d-dice/dice-box";
import { useEffect, useState } from "react";

export const useDiceRoller = () => {
  const [color, setColor] = useState("#086931");
  const [dicebox, setDicebox] = useState<DiceBox>(undefined);
  const [hasRolled, setHasRolled] = useState(false);
  const [result, setResult] = useState<{ value: number } | null>(null);
  const [canvasElement, setCanvasElement] = useState<
    HTMLCanvasElement | HTMLDivElement | null
  >(null);

  useEffect(() => {
    if (canvasElement === null) {
      return;
    }

    if (canvasElement && dicebox === undefined) {
      init();
    }
  }, [canvasElement, dicebox]);

  // create Dice Roll Parser to handle complex notations
  const DRP = new DiceParser();

  const init = async (themeColor = "#086931") => {
    const Dice = new DiceBox(
      `#dice-canvas`, // target DOM element to inject the canvas for rendering
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

  const roll = (notation: string, color?: string) => {
    const parsedNotation = DRP.parseNotation(notation);
    const diceBoxNotation = color
      ? parsedNotation.map((n: { [key: string]: unknown }) => ({
          ...n,
          themeColor: color,
        }))
      : parsedNotation;

    if (hasRolled) {
      dicebox.show().add(diceBoxNotation);
    } else {
      dicebox.show().roll(diceBoxNotation);
      setHasRolled(true);
    }
  };

  const clear = () => {
    setResult(null);
    setHasRolled(false);
    dicebox.clear();
  };

  const canvas = (
    <canvas
      className="w-full h-full pointer-events-none absolute z-10 top-0 left-0"
      id="dice-canvas"
      ref={setCanvasElement}
    />
  );

  const isLoading = dicebox ? false : true;

  return {
    roll,
    color,
    setColor,
    clear,
    dicebox,
    result,
    canvas,
    isLoading,
  };
};
