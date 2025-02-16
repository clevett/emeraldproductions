"use client";
import { useState } from "react";

import { SketchPicker } from "react-color";
import { Spinner } from "@radix-ui/themes";
import { IconButton, ReloadIcon } from "@/components";

import { useDiceBox } from "../hooks/useDiceBox";
import { DiceButtons, NotationInput } from "./";

export const DiceRoller = () => {
  const { roll, isLoading, canvas, clear, setColor, color } = useDiceBox();
  const [isOpen, setIsOpen] = useState(false);
  const rollDice = (notation: string) => roll(notation, color);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : (
        <div className="grid justify-center gap-4 sm:gap-6 w-full">
          <div className="flex flex-wrap flex-direction-row justify-between content-center gap-4 lg:gap-6">
            <DiceButtons roll={rollDice} />
            <IconButton
              aria-label="clear dice results"
              className="self-center"
              onClick={clear}
              variant="ghost"
            >
              <ReloadIcon />
            </IconButton>
          </div>

          <div className="grid gap-4 grid-flow-col">
            <NotationInput submit={rollDice} />
            <div className="grid gap-2 relative">
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
      )}
      {canvas}
    </>
  );
};

export default DiceRoller;
