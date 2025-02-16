import { useRecoilValue } from "recoil";

import { Spinner } from "@radix-ui/themes";

import { attributeSelector, gearSelector, skillSelector } from "../recoil";

import { Button } from "@/components";
import { useMYZRoller } from "@/app/tools/diceroller/hooks";
import { RollResults } from "@/types/dice";

export const Dicebox = () => {
  const { roll, clear, isLoading, isRolling, result, canvas } = useMYZRoller();
  const attribute = useRecoilValue(attributeSelector);
  const skill = useRecoilValue(skillSelector);
  const gear = useRecoilValue(gearSelector);

  const rollDice = () => {
    roll({
      skill,
      attribute,
      gear,
    });
    return roll;
  };

  console.log("result", result);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : (
        <div className="grid justify-center gap-4 sm:gap-6 w-full">
          <div className="grid grid-flow-col justify-center gap-4 sm:gap-6 w-full">
            <Button className="py-3 px-4" onClick={rollDice}>
              Roll
            </Button>

            <Button className="py-3 px-4" onClick={clear}>
              Clear
            </Button>
          </div>

          {result?.length && (
            <div className="grid gap-4 grid-flow-col grid-cols-3 w-full">
              {result.map((r, index) => (
                <div key={index} className="flex flex-col flex-wrap gap-2">
                  {r.rolls.map(
                    (roll: RollResults["rolls"][0], index: number) => (
                      <div
                        key={roll.id ?? index}
                        className={
                          "grid justify-center  items-center rounded-lg h-[30px] w-[30px] " +
                          `bg-[${roll.themeColor}]`
                        }
                      >
                        <span className="font-bold">{roll.value}</span>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {canvas}
    </>
  );
};
