import { Button, IconButton, ReloadIcon } from "@/components";
import { AnimatedDie, Die } from "@/components/AnimatedDie";

type DiceTitleProps = {
  die: Die;
  onClick: () => void;
  onReset?: () => void;
  title: string;
};

export const DiceTitle = ({ onClick, onReset, title, die }: DiceTitleProps) => {
  return (
    <div className={`grid gap-4 grid-flow-col content-center items-center`}>
      {onReset && (
        <IconButton aria-label={title} onClick={onReset}>
          <ReloadIcon />
        </IconButton>
      )}

      <Button onClick={onClick}>{title}</Button>
      <AnimatedDie dieSize={die} onRoll={onClick} />
    </div>
  );
};
