import { EuiFlexItem, EuiCard, EuiIcon, EuiButtonIcon } from "@elastic/eui";

import styles from "../styles.module.css";
import { capitalize } from "../../helpers";
import { getIcon } from "../helpers/getIcon";
import { Card } from "../data/createTheZone";

export const ZoneCard = ({
  title,
  content,
  onChange,
}: {
  title: `${Card}`;
  content: string;
  onChange?: () => void;
}) => {
  return (
    <EuiFlexItem className={`${styles.minH} ${styles.minW}`}>
      <EuiCard
        icon={<EuiIcon size="xxl" type={getIcon(title)} />}
        description={content}
        display="subdued"
        onClick={onChange}
        title={capitalize(title)}
        footer={
          <EuiButtonIcon
            className="justify-self-end"
            onClick={onChange}
            iconType="refresh"
            aria-label={`get a new ${title}`}
          />
        }
      />
    </EuiFlexItem>
  );
};
