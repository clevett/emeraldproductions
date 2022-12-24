import { EuiText } from "@elastic/eui";

export const SmallTitle = ({
  name,
  color,
}: {
  name: string;
  color?: string;
}) => {
  const textColor = color ? `text-${color}-600` : "";
  return (
    <div className={`text-center capitalize ${textColor}`}>
      <EuiText size="m">
        <h5>{name}</h5>
      </EuiText>
    </div>
  );
};
