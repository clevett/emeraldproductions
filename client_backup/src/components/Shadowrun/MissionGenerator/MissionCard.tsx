import { useRecoilState } from "recoil";
import {
  EuiFlexItem,
  EuiCard,
  EuiIcon,
  EuiText,
  EuiButtonIcon,
} from "@elastic/eui";

import { Option } from "./data/srMissions";

import styles from "../styles.module.css";
import { capitalize } from "../../helpers";
import { selectMission } from "./recoil";
import { getIcon, getOption } from "./helpers";

type MissionCardProps = {
  item: Option;
};

export const MissionCard = ({ item }: MissionCardProps) => {
  const [selected, setSelected] = useRecoilState(selectMission(item));

  const handleClick = () => {
    const result = getOption(item);
    if (result) {
      setSelected(result);
    }
  };

  const note = selected?.note;

  return (
    <EuiFlexItem className={`${styles.min250} ${styles.minW250}`}>
      <EuiCard
        icon={<EuiIcon size="xxl" type={getIcon(item)} />}
        title={capitalize(item)}
        description={selected?.description}
        onClick={handleClick}
        display="subdued"
        footer={
          <EuiButtonIcon
            className="justify-self-end"
            onClick={handleClick}
            iconType="refresh"
            aria-label={`get a new ${item}`}
          />
        }
      >
        {note ? (
          <EuiFlexItem className="flex-col justify-center">
            <EuiText className="text-center">{note}</EuiText>
          </EuiFlexItem>
        ) : null}
      </EuiCard>
    </EuiFlexItem>
  );
};
