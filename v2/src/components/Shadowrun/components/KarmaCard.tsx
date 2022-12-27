import { EuiTitle, EuiSpacer, EuiText } from "@elastic/eui";
import { useRecoilValue } from "recoil";
import { CardPanel } from "../../CardPanel";
import { selectKarma } from "../recoil";

export const KarmaCard = () => {
  const karma = useRecoilValue(selectKarma);
  return (
    <CardPanel>
      <EuiTitle size="s">
        <h4>Karma Reward</h4>
      </EuiTitle>
      <EuiSpacer size="s" />
      <EuiText>{karma}</EuiText>
    </CardPanel>
  );
};
