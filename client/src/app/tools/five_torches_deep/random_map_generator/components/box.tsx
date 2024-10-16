"use client";
import { useState } from "react";

import { maps } from "@/app/data/ftdMaps";
import { getDiceRollTotal } from "@/app/tools/utils";

export const Box = ({ name }: { name: string }) => {
  const roll = getDiceRollTotal();

  const [number, setNumber] = useState(roll("1d6"));
  const { color, description } =
    maps.find((element) => element.number === number) || maps[0];

  const handleClick = () => setNumber(roll("1d6"));

  const background = color !== "white" ? `bg-${color}-600` : `bg-neutral-200`;
  const textColor = color === "white" ? `black` : `white`;

  return (
    <div
      className={`grid border-black border-solid border-2 ${background} text-${textColor} content-center justify-center pr-3 pl-3 pt-4 pb-4 cursor-pointer`}
      onClick={handleClick}
    >
      <h4 className="mb-4" style={{ color: textColor }}>
        {name}
      </h4>

      <p>{description}</p>
    </div>
  );
};

export default Box;
