import { RecoilState, useRecoilState } from "recoil";

import { Button } from "@/components";

export const DiceCounter = ({
  className,
  selector,
}: {
  className: string;
  selector: RecoilState<number>;
}) => {
  const [dice, setDice] = useRecoilState(selector);

  const changeDice = (value: number) => {
    const difference = dice + value;

    if (difference < 0) {
      setDice(0);
      return;
    } else if (difference > 20) {
      setDice(20);
      return;
    }

    setDice(difference);
  };

  const styles =
    "text-lg font-bold p-6 rounded disabled:bg-gray-500 disabled:cursor-not-allowed min-w-[80px] min-h-[80px] sm:min-w-[50px] sm:min-h-[50px] ";

  return (
    <div className="grid gap-4 grid-flow-col auto-cols-max justify-center items-center grid-cols-[1fr_minmax(2em,_1fr)_1fr]">
      <Button
        className={styles + className}
        disabled={dice === 0}
        onClick={() => changeDice(-1)}
      >
        -
      </Button>
      <span className="text-center">{dice}d6</span>
      <Button
        className={styles + className}
        disabled={dice === 20}
        onClick={() => changeDice(1)}
      >
        +
      </Button>
    </div>
  );
};
