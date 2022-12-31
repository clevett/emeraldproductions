import { useRecoilState } from "recoil";
import { EuiFlexItem, EuiCard, EuiIcon, EuiButtonIcon } from "@elastic/eui";

import styles from "../styles.module.css";
import { capitalize } from "../../helpers";

// type MissionCardProps = {
//   item: Option;
// };

export const ZoneCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  //const [selected, setSelected] = useRecoilState(selectMission(item));

  const handleClick = () => {
    console.log("Sector");
    // const result = getOption(item);
    // if (result) {
    //   setSelected(result);
    // }
  };

  //const note = selected?.note;

  return (
    <EuiFlexItem className={`${styles.min250} ${styles.minW250}`}>
      <EuiCard
        icon={<EuiIcon size="xxl" type={"cross"} />}
        title={capitalize(title)}
        description={content}
        onClick={handleClick}
        display="subdued"
        footer={
          <EuiButtonIcon
            className="justify-self-end"
            onClick={handleClick}
            iconType="refresh"
            aria-label={`get a new ${title}`}
          />
        }
      />
    </EuiFlexItem>
  );
};
