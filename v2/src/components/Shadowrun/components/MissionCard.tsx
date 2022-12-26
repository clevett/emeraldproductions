import { EuiFlexItem, EuiCard, EuiIcon, EuiButton } from "@elastic/eui";
import user from "../../../imgs/icomoon/250-hipster.svg";

type MissionCardProps = {
  item: string;
  onChange: () => void;
};

export const MissionCard = ({ item, onChange }: MissionCardProps) => {
  return (
    <EuiFlexItem>
      <EuiCard
        className="capitalize"
        icon={<EuiIcon size="xxl" type={user} />}
        title={item}
        description={item}
        onClick={onChange}
      >
        <EuiButton className="capitalize" fill color="warning">
          Replace {item}
        </EuiButton>
      </EuiCard>
    </EuiFlexItem>
  );
};
