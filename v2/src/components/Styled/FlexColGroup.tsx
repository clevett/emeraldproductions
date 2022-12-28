import { EuiFlexGroup } from "@elastic/eui";

export const FlexColGroup = ({
  children,
}: {
  children: JSX.Element | (JSX.Element | null)[];
}) => {
  return (
    <EuiFlexGroup className="flex-col justify-start gap-4 flex-wrap">
      {children}
    </EuiFlexGroup>
  );
};
