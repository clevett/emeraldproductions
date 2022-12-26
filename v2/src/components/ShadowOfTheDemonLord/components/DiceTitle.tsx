import { EuiFlexItem, EuiTitle, EuiButton } from "@elastic/eui";
import { AnimatedDie, Die } from "../../AnimatedDie/AnimatedDie";

import styles from "../styles.module.css";

type DiceTitleProps = {
  die: Die;
  onClick: () => void;
  title: string;
};

export const DiceTitle = ({ onClick, title, die }: DiceTitleProps) => {
  return (
    <EuiFlexItem className={`grid ${styles.colfit} gap-x-1.5`}>
      <EuiTitle className="text-center w-fit self-center" size="s">
        <EuiButton
          className="col-start-2 justify-self-center"
          onClick={() => onClick()}
          fill
        >
          <h4>{title}</h4>
        </EuiButton>
      </EuiTitle>
      <EuiFlexItem className="justify-self-start">
        <AnimatedDie dieSize={die} onRoll={onClick} />
      </EuiFlexItem>
    </EuiFlexItem>
  );
};
