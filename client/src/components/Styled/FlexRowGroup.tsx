import { EuiFlexGroup } from "@elastic/eui";

export const FlexRowGroup = ({
  children,
}: {
  children: JSX.Element | (JSX.Element | null)[];
}) => {
  return (
    <EuiFlexGroup className="flex-row justify-start gap-4 flex-wrap">
      {children}
    </EuiFlexGroup>
  );
};
