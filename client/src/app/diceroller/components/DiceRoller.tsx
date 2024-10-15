"use client";
import { useState } from "react";
import { useDiceRoller } from "@/app/diceroller/hooks/useDiceBox";
import { DiceButtons, NotationInput } from "@/app/diceroller/components";
import { SketchPicker } from "react-color";
import { IconButton, Spinner } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons";

export const DiceRoller = () => {
  const { roll, isLoading, canvas, clear, setColor, color } = useDiceRoller();
  const [isOpen, setIsOpen] = useState(false);
  const rollDice = (notation: string) => roll(notation, color);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="w-full grid grid-cols-[400px_min-content] gap-4">
          <DiceButtons roll={rollDice} />
          <IconButton
            aria-label="clear dice results"
            className="self-center"
            onClick={clear}
            variant="ghost"
          >
            <TrashIcon width="18" height="18" />
          </IconButton>
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
  );
};

export default DiceRoller;
