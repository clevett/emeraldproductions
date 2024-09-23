import { DriveThruLink } from "./DriveThruLink";

interface LayoutBodyProps {
  children: JSX.Element | (JSX.Element | null)[] | null;
  DriveThruId: string;
  subtitle: string;
  title: string;
}

export const ToolLayout = ({
  children,
  DriveThruId,
  subtitle,
  title,
}: LayoutBodyProps) => {
  return (
    <section className="grid gap-6">
      <DriveThruLink id={DriveThruId}>
        <h2>{title}</h2>
      </DriveThruLink>
      <h3>{subtitle}</h3>
      <section className="w-full">{children}</section>
    </section>
  );
};
