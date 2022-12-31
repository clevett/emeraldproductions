import { EuiTitle, EuiSpacer, EuiPanel } from "@elastic/eui";
import { DriveThruLink } from "./DriveThruLink/DriveThruLink";

interface LayoutBodyProps {
  children: JSX.Element | (JSX.Element | null)[] | null;
  DriveThruId: string;
  subtitle: string;
  title: string;
}

export const LayoutBody = ({
  title,
  subtitle,
  children,
  DriveThruId,
}: LayoutBodyProps) => {
  return (
    <>
      <DriveThruLink id={DriveThruId}>
        <EuiTitle size="l">
          <h2>{title}</h2>
        </EuiTitle>
      </DriveThruLink>
      <EuiSpacer />
      <EuiTitle size="m">
        <h3>{subtitle}</h3>
      </EuiTitle>
      <EuiSpacer />
      <EuiPanel hasShadow={false} paddingSize="none" className="w-full">
        {children}
      </EuiPanel>
    </>
  );
};
