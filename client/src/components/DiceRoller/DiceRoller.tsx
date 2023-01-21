import { LayoutBody } from "../LayoutBody";
import { useEffect, useState } from "react";
import { useDiceRoller } from "./useDiceBox";
import { json } from "stream/consumers";

export const DiceRoller = () => {
  const [canvasElement, setCanvasElement] = useState<
    HTMLCanvasElement | HTMLDivElement | null
  >(null);
  const { init, roll, dicebox, canvasId, result } = useDiceRoller();

  useEffect(() => {
    if (canvasElement === null) {
      return;
    }

    if (dicebox === undefined) {
      init();
    }
  }, [canvasElement, dicebox, init, roll]);

  console.log(result);

  return (
    <LayoutBody DriveThruId="155572" subtitle="" title="Dice Roller">
      <button onClick={() => roll("8d6!")}>Exploding Roll</button>
      <canvas
        id={canvasId}
        className="w-full h-full pointer-events-none absolute z-10 top-0 left-0"
        ref={setCanvasElement}
      />
    </LayoutBody>
  );
};
