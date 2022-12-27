import { useState } from "react";
import {
  EuiFlexItem,
  EuiCard,
  EuiIcon,
  EuiText,
  EuiSpacer,
  EuiFlexGroup,
  EuiButtonIcon,
} from "@elastic/eui";

import { mission } from "../../../data/srMissions";
import { useDiceRoller } from "../../../hooks/useDiceRoller";
import { Options, Option, MissionElement } from "../../../data/srMissions";

import styles from "../styles.module.css";
import { capitalize } from "../../helpers";
import { getIcon } from "../helpers";

type MissionCardProps = {
  item: Option;
  onChange: (arg: MissionElement) => void;
};

export const MissionCard = ({ item, onChange }: MissionCardProps) => {
  const roll = useDiceRoller();
  const dice = item === Options.EMPLOYER ? "2d6" : "1d6";

  const options = mission.filter((m) => m.table === item);
  const findResult = (r: number) => options.find((e) => e.result.includes(r));

  const [selected, setSelected] = useState(findResult(roll(dice)));

  const handleClick = () => {
    const newRoll = roll(dice);
    const result = findResult(newRoll);
    if (result) {
      onChange(result);
      setSelected(findResult(newRoll));
    }
  };

  return (
    <EuiFlexItem className={`${styles.min250} ${styles.minW250}`}>
      <EuiCard
        className="capitalize"
        icon={<EuiIcon size="xxl" type={getIcon(item)} />}
        title={capitalize(item)}
        description={selected?.description}
        onClick={handleClick}
      >
        <EuiFlexGroup className="flex-col">
          {selected?.note ? <EuiText>{selected.note}</EuiText> : null}
          <EuiSpacer size="m" />
          <EuiButtonIcon
            className="justify-self-end"
            onClick={handleClick}
            iconType="refresh"
            aria-label={`get a new ${item}`}
          />
        </EuiFlexGroup>
      </EuiCard>
    </EuiFlexItem>
  );
};
