import { DriveThruLink, Title, OpenInNewWindowIcon } from "@/app/components";

import styles from "./ToolLayout.module.css";

interface LayoutBodyProps {
  children: JSX.Element | (JSX.Element | null)[] | null;
  DriveThruId: string;
  subtitle?: string;
  title: string;
}

export const ToolLayout = ({
  children,
  DriveThruId,
  title,
}: LayoutBodyProps) => {
  return (
    <section className={`grid gap-6 p-4 ${styles.panel}`}>
      <DriveThruLink id={DriveThruId}>
        <Title className="mr-2">{title}</Title>
        <OpenInNewWindowIcon />
      </DriveThruLink>
      {children}
    </section>
  );
};
