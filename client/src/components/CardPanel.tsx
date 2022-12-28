import { EuiPanel } from "@elastic/eui";

type child = JSX.Element | null | undefined | string;

export const CardPanel = ({ children }: { children: child | child[] }) => {
  return (
    <EuiPanel hasBorder paddingSize="m" color="subdued">
      {children}
    </EuiPanel>
  );
};
