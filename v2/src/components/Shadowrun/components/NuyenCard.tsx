import { EuiTitle, EuiSpacer, EuiText } from "@elastic/eui";
import { useRecoilValue } from "recoil";
import { CardPanel } from "../../CardPanel";
import { nuyenAtom } from "../recoil/";

export const NuyenCard = () => {
  const nuyen = useRecoilValue(nuyenAtom);

  return (
    <CardPanel>
      <EuiTitle size="s">
        <h4>Nuyen Reward</h4>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText>{nuyen}</EuiText>
    </CardPanel>
  );
};
