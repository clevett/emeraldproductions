import { useRecoilValue } from "recoil";

import { useDiceRoller } from "@/app/tools/diceroller/hooks/useDiceBox";
import { Button } from "@/components";
import { Spinner } from "@radix-ui/themes";
import { attributeSelector, gearSelector, skillSelector } from "../recoil";

export const Dicebox = () => {
  const attribute = useRecoilValue(attributeSelector);
  const skill = useRecoilValue(skillSelector);
  const gear = useRecoilValue(gearSelector);

  const { roll, isLoading, canvas, clear, hasRolled, dicebox } =
    useDiceRoller();

  const rollDice = () => {
    if (hasRolled) {
      clear();
    }

    const a = roll([
      { qty: attribute, sides: 6, themeColor: "#facc15" },
      { qty: skill, sides: 6, themeColor: "#84cc16" },
      { qty: gear, sides: 6, themeColor: "#000000" },
    ]);

    console.log(a);
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : (
        <div className="grid justify-center gap-4 sm:gap-6 w-full">
          <Button onClick={rollDice}>Roll</Button>
        </div>
      )}
      {canvas}
    </>
  );
};
