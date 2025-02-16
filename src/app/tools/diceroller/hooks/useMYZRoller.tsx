"use client";

import { useEffect, useState } from "react";
import DiceBox from "@3d-dice/dice-box";
import { RollResults } from "@/types/dice";

const defaultColor = "#086931";

export const useMYZRoller = () => {
  const [color, setColor] = useState(defaultColor);
  const [dicebox, setDicebox] = useState<DiceBox | undefined>(undefined);
  const [result, setResult] = useState<RollResults[] | null>(null);
  const [canvasElement, setCanvasElement] = useState<
    HTMLCanvasElement | HTMLDivElement | null
  >(null);
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    if (canvasElement === null) {
      return;
    }

    if (canvasElement && dicebox === undefined) {
      init();
    }
  }, [canvasElement, dicebox]);

  const init = async (themeColor = defaultColor) => {
    const { default: Dicebox } = await import("@3d-dice/dice-box");

    const Dice = new Dicebox(
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
    dicebox.onRollComplete = (results) => {
      setResult(results);
      setIsRolling(false);
    };
  }

  const roll = ({
    skill,
    attribute,
    gear,
  }: {
    skill?: number;
    attribute: number;
    gear?: number;
  }) => {
    setIsRolling(true);

    //@ts-expect-error ignore
    dicebox?.roll(`${attribute}d6>5`, {
      themeColor: "#f0b100",
    });

    if (skill) {
      //@ts-expect-error ignore
      dicebox?.add(`${skill}d6>5`, {
        themeColor: "#008236",
      });
    }

    if (gear) {
      //@ts-expect-error ignore
      dicebox?.add(`${gear}d6>5`, { themeColor: "#0a0a0a" });
    }
  };

  const clear = () => {
    setResult(null);
    setHasRolled(false);
    dicebox?.clear();
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
    isRolling,
  };
};
