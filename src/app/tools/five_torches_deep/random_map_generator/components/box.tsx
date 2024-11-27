"use client";
import { useState } from "react";

import { maps } from "@/data/ftdMaps";
import { getDiceRollTotal } from "@/app/tools/utils";
import { Heading } from "@/components";

export const Box = ({ name }: { name: string }) => {
  const roll = getDiceRollTotal();

  const [number, setNumber] = useState(roll("1d6"));
  const { color, description } =
    maps.find((element) => element.number === number) || maps[0];

  const handleClick = () => setNumber(roll("1d6"));

  const background = color !== "white" ? `bg-${color}-600` : `bg-neutral-200`;
  const textColor = color === "white" ? `text-black` : `text-white`;

  return (
    <div
      className={`grid border-black border-solid border-2 ${background} text-${textColor} content-center justify-center p-2 gap-2 md:px-3 md:py-4 md:gap-4 cursor-pointer`}
      onClick={handleClick}
    >
      <Heading as="h4" className={`${textColor}`}>
        {name}
      </Heading>
      <p className={`${textColor}`}>{description}</p>
    </div>
  );
};

export default Box;
