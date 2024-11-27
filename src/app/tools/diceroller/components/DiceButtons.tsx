import Image from "next/image";

import d20 from "@/images/dice/d20.svg";
import d12 from "@/images/dice/d12.svg";
import d10 from "@/images/dice/d10.svg";
import d8 from "@/images/dice/d8.svg";
import d6 from "@/images/dice/d6-2.svg";
import d4 from "@/images/dice/d4.svg";
import { IconButton } from "@/components";

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

export const DiceButtons = ({
  models = dice,
  roll,
}: {
  models?: typeof dice;
  roll: (arg: string) => void;
}) => {
  const buttons = models.map((d) => (
    <IconButton
      key={`d-${d}-dice`}
      label={`roll a d${d}`}
      onClick={() => roll(`1d${d}`)}
      styles="self-center min-h-[50px] min-w-[50px] max-h-[50px] max-w-[50px]"
      variant="ghost"
    >
      <Image src={getIcon(d)} alt={`d ${d} icon`} />
    </IconButton>
  ));

  return buttons;
};
