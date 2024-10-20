import { Button, IconButton, ReloadIcon } from "@/app/components";
import { AnimatedDie, Die } from "@/app/components/AnimatedDie";

type DiceTitleProps = {
  die: Die;
  onClick: () => void;
  onReset?: () => void;
  title: string;
};

export const DiceTitle = ({ onClick, onReset, title, die }: DiceTitleProps) => {
  return (
    <div className={`grid gap-2 auto-cols-fr items-center`}>
      {onReset && (
        <IconButton
          label="Clear days"
          onClick={onReset}
          styles="justify-self-end"
        >
          <ReloadIcon />
        </IconButton>
      )}
      <p className="text-center w-fit self-center">
        <Button
          styles="col-start-2 justify-self-center"
          onClick={onClick}
          name={title}
        />
      </p>
      <div className="justify-self-start">
        <AnimatedDie dieSize={die} onRoll={onClick} />
      </div>
    </div>
  );
};
