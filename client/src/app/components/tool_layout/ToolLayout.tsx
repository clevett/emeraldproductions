import { DriveThruLink, Title } from "@/app/components";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";

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
    <section className={styles.panel}>
      <DriveThruLink id={DriveThruId}>
        <Title mr="2">{title}</Title>
        <OpenInNewWindowIcon />
      </DriveThruLink>
      <div className="w-full">{children}</div>
    </section>
  );
};
