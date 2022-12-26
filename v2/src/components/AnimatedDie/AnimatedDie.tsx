import { useState } from "react";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";

import d20 from "../../imgs/icons/dice-twenty-faces-twenty.svg";
import d6 from "../../imgs/icons/perspective-dice-six-faces-six.svg";

import styles from "./styles.module.css";

type AnimatedDieType = {
  dieSize: "d20" | "d6";
  onRoll: (arg: number) => void;
  quantity?: number;
};

export const AnimatedDie = ({
  dieSize,
  quantity = 1,
  onRoll,
}: AnimatedDieType) => {
  const rollDie = (notation: string) => new DiceRoll(notation).total;
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
      <button
        className={`w-10 h-10 bg-transparent ${
          animation ? styles.rollDie : ""
        }`}
        onAnimationEnd={animationEnd}
        onClick={handleClick}
        type="button"
      >
        <img alt={altText()} src={image}></img>
      </button>
      <span className="text-white">{result}</span>
    </div>
  );
};
