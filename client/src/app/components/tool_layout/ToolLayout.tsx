import { Heading } from "@radix-ui/themes";
import { DriveThruLink } from "../drive_thru_link/DriveThruLink";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";

import { Sidebar } from "./Sidebar";

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
  subtitle,
  title,
}: LayoutBodyProps) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <section className={styles.panel}>
        <DriveThruLink id={DriveThruId}>
          <Heading mr="2" size="6">
            {title}
          </Heading>
          <OpenInNewWindowIcon />
        </DriveThruLink>
        {subtitle && <Heading as="h2">{subtitle}</Heading>}
        <div className="w-full">{children}</div>
      </section>
    </div>
  );
};
