import { useState } from "react";
import { EuiButtonIcon, EuiLoadingSpinner } from "@elastic/eui";
import { SketchPicker } from "react-color";
import { LayoutBody } from "../LayoutBody";
import { DiceButtons } from "./DiceButtons";
import { NotationInput } from "./NotationInput";
import { useDiceRoller } from "./useDiceBox";

export const DiceRoller = () => {
  const { roll, isLoading, canvas, clear, setColor, color } = useDiceRoller();
  const [isOpen, setIsOpen] = useState(false);

  const rollDice = (notation: string) => roll(notation, color);

  return (
    <LayoutBody DriveThruId="155572" subtitle="" title="Dice Roller">
      <>
        {isLoading ? (
          <EuiLoadingSpinner size="s" />
        ) : (
          <div className="w-full grid grid-cols-[400px_min-content] gap-4">
            <DiceButtons roll={rollDice} />
            <EuiButtonIcon
              aria-label="flip the card"
              className="self-center"
              color="danger"
              iconType="trash"
              onClick={clear}
            />

            <div className="w-full grid gap-2">
              <div className="grid gap-4 grid-flow-col">
                <NotationInput submit={rollDice} />
                <div className="grid gap-2">
                  <button
                    className={`rounded-full bg-[${color}] border-[${color}] border-2 border-solid h-8 w-8 relative`}
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                      backgroundColor: color,
                      borderColor: color,
                    }}
                  />
                  <div
                    className="absolute top-[17%] left-[15%]"
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    {isOpen && (
                      <SketchPicker
                        color={color}
                        disableAlpha={true}
                        onChange={(c) => setColor(c.hex)}
                        presetColors={undefined}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {canvas}
      </>
    </LayoutBody>
  );
};
