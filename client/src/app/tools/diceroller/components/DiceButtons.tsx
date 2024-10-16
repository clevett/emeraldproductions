import Image from "next/image";

import d20 from "@/app/images/dice/d20.svg";
import d12 from "@/app/images/dice/d12.svg";
import d10 from "@/app/images/dice/d10.svg";
import d8 from "@/app/images/dice/d8.svg";
import d6 from "@/app/images/dice/d6-2.svg";
import d4 from "@/app/images/dice/d4.svg";
import { IconButton } from "@radix-ui/themes";

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
      className="self-center min-h-[50px] min-w-[50px] w-full h-full"
      key={`d-${d}-dice`}
      onClick={() => roll(`1d${d}`)}
      variant="ghost"
    >
      <Image src={getIcon(d)} alt={`d ${d} icon`} />
    </IconButton>
  ));

  return (
    <div
      className={`grid grid-flow-col max-w-md min-h-min justify-center content-center gap-6 mb-4`}
    >
      {buttons}
    </div>
  );
};