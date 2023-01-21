import { LayoutBody } from "../LayoutBody";
import { useEffect, useState } from "react";
import { useDiceRoller } from "./useDiceBox";
import { NotationInput } from "./NotationInput";
import { EuiLoadingSpinner, EuiTextColor } from "@elastic/eui";

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

  const message = "Enter the dice string and press Enter";

  return (
    <LayoutBody DriveThruId="155572" subtitle="" title="Dice Roller">
      {!dicebox ? (
        <EuiLoadingSpinner size="s" />
      ) : (
        <>
          <NotationInput submit={roll} />
          <EuiTextColor color="subdued">{message}</EuiTextColor>
        </>
      )}

      <canvas
        id={canvasId}
        className="w-full h-full pointer-events-none absolute z-10 top-0 left-0"
        ref={setCanvasElement}
      />
    </LayoutBody>
  );
};
