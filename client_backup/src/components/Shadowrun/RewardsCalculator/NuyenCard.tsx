import { EuiTitle, EuiSpacer, EuiText } from "@elastic/eui";
import { useRecoilValue } from "recoil";
import { CardPanel } from "../../CardPanel";
import { selectNuyen } from "./recoil";

import styles from "../styles.module.css";

export const NuyenCard = () => {
  const nuyen = useRecoilValue(selectNuyen);

  return (
    <div className={`${styles.maxH100}`}>
      <CardPanel>
        <EuiTitle size="s">
          <h4>Nuyen Reward</h4>
        </EuiTitle>
        <EuiSpacer size="s" />
        <EuiText>{nuyen.toLocaleString()}¥</EuiText>
      </CardPanel>
    </div>
  );
};
