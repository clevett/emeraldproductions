import { useRecoilState, useSetRecoilState } from "recoil";
import { diceKarmaAtom, diceNuyenAtom, opposedDicePoolAtom } from "../recoil";
import { getDicePoolKarma, getDicePoolNuyen } from "../helpers";
import { Heading, Input } from "@/app/components";

export const HighestOpposingDicePool = () => {
  const [dice, setDice] = useRecoilState(opposedDicePoolAtom);
  const setKarma = useSetRecoilState(diceKarmaAtom);
  const setNuyen = useSetRecoilState(diceNuyenAtom);

  const onSubmit = (value: string) => {
    const num = parseInt(value);
    setDice(num);
    setKarma(getDicePoolKarma(num));
    setNuyen(getDicePoolNuyen(num));
  };

  return (
    <div className="grid gap-4 grid-flow-col w-fill justify-center content-center">
      <Heading as="h4">Highest Opposing Dice Pool</Heading>
      <Input
        aria-label="Enter the highest opposed dice pool"
        defaultValue={`${dice}`}
        label="Highest opposed dice pool"
        min={0}
        placeholder={`${dice}`}
        styles="text-center"
        submit={onSubmit}
      />
    </div>
  );
};
