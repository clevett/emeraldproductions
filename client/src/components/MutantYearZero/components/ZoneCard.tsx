import { EuiFlexItem, EuiCard, EuiIcon, EuiButtonIcon } from "@elastic/eui";

import styles from "../styles.module.css";
import { capitalize } from "../../helpers";

// type MissionCardProps = {
//   item: Option;
// };

export const ZoneCard = ({
  title,
  content,
  onChange,
}: {
  title: string;
  content: string;
  onChange?: () => void;
}) => {
  return (
    <EuiFlexItem className={`${styles.min250} ${styles.minW250}`}>
      <EuiCard
        icon={<EuiIcon size="xxl" type={"cross"} />}
        title={capitalize(title)}
        description={content}
        onClick={onChange}
        display="subdued"
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
