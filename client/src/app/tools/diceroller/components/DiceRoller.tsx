"use client";
import { useState } from "react";

import { SketchPicker } from "react-color";
import { Spinner } from "@radix-ui/themes";
import { IconButton, ReloadIcon } from "@/app/components/";

import { useDiceRoller } from "../hooks/useDiceBox";
import { DiceButtons, NotationInput } from "./";

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
            label="clear dice results"
            onClick={clear}
            styles="self-center"
            variant="ghost"
          >
            <ReloadIcon />
          </IconButton>
          <div className="w-full grid gap-2">
            <div className="grid gap-4 grid-flow-col">
              <NotationInput submit={rollDice} />
              <div className="grid gap-2">
                <button
                  aria-label="color-picker"
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
