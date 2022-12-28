import { EuiFlexItem, EuiTitle, EuiButton, EuiButtonIcon } from "@elastic/eui";
import { AnimatedDie, Die } from "../../AnimatedDie/AnimatedDie";

import styles from "../styles.module.css";

type DiceTitleProps = {
  die: Die;
  onClick: () => void;
  onReset?: () => void;
  title: string;
};

export const DiceTitle = ({ onClick, onReset, title, die }: DiceTitleProps) => {
  return (
    <div className={`grid ${styles.colfit} gap-2 auto-cols-fr items-center`}>
      {onReset ? (
        <EuiButtonIcon
          className="justify-self-end"
          onClick={onReset}
          iconType="refresh"
          aria-label="Clear days"
        />
      ) : null}
      <EuiTitle className="text-center w-fit self-center" size="s">
        <EuiButton
          className="col-start-2 justify-self-center"
          onClick={onClick}
        >
          <h4>{title}</h4>
        </EuiButton>
      </EuiTitle>
      <EuiFlexItem className="justify-self-start">
        <AnimatedDie dieSize={die} onRoll={onClick} />
      </EuiFlexItem>
    </div>
  );
};
