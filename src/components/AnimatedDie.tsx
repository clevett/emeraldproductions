"use client";
import Image from "next/image";
import { useState } from "react";
import { getDiceRollTotal } from "@/app/tools/utils";

import { d20, d6 } from "@/images";

import styles from "./AnimatedDie.module.css";
import { IconButton } from "./radix";

export type Die = "d20" | "d6";

type AnimatedDieType = {
  dieSize: Die;
  onRoll: (arg: number) => void;
  quantity?: number;
};

export const AnimatedDie = ({
  dieSize,
  quantity = 1,
  onRoll,
}: AnimatedDieType) => {
  const rollDie = getDiceRollTotal();
  const size = dieSize || "d6";
  const image = dieSize === "d20" ? d20 : d6;

  const [animation, setAnimation] = useState(false);
  const [roll, setRoll] = useState<number | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    //Begin animation
    setAnimation(true);

    //Roll a die and hold the result
    const diceRoll = rollDie(`${quantity}${size}`);
    setRoll(diceRoll);

    //Reset the previous string to empty
    setResult(null);

    onRoll(diceRoll);
  };

  const animationEnd = () => {
    setAnimation(false);
    setResult(roll);
  };

  const altText = () =>
    result
      ? `Previous result was ${result}. Roll another ${size}.`
      : `Roll a ${size}.`;

  return (
    <div>
      <IconButton
        aria-label="Roll Die"
        className={`w-10 h-10 bg-transparent ${
          animation ? styles.rollDie : ""
        }`}
        onAnimationEnd={animationEnd}
        onClick={handleClick}
        type="button"
      >
        <Image alt={altText()} src={image} height={50} width={50}></Image>
      </IconButton>
      <span className="text-white">{result}</span>
    </div>
  );
};
