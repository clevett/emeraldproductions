import { EuiButtonIcon } from "@elastic/eui";

import styles from "./styles.module.css";

import d20 from "../../imgs/icons/dice-twenty-faces-twenty.svg";
import d12 from "../../imgs/icons/d12.svg";
import d10 from "../../imgs/icons/d10.svg";
import d8 from "../../imgs/icons/dice-eight-faces-eight.svg";
import d6 from "../../imgs/icons/perspective-dice-six.svg";
import d4 from "../../imgs/icons/d4.svg";

const dice = [20, 12, 10, 8, 6, 4];

const getIcon = (sides: number) => {
  switch (sides) {
    case 20:
      return d20;
    case 12:
      return d12;
    case 10:
      return d10;
    case 8:
      return d8;
    case 6:
      return d6;
    case 4:
      return d4;
    default:
      return d20;
  }
};

export const DiceButtons = ({ roll }: { roll: (arg: string) => void }) => {
  const buttons = dice.map((d) => (
    <EuiButtonIcon
      aria-label={`flip the card`}
      className="self-center min-h-[50px] min-w-[50px] w-full h-full"
      iconType={getIcon(d)}
      key={`d-${d}-dice`}
      onClick={() => roll(`1d${d}`)}
      size="m"
    />
  ));

  return (
    <div
      className={`grid grid-flow-col max-w-md min-h-min justify-center content-center gap-6 mb-4 ${styles.buttons}`}
    >
      {buttons}
    </div>
  );
};
