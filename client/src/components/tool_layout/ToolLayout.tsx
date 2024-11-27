import { DriveThruLink, Title, OpenInNewWindowIcon } from "@/components";

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
  footer,
}: LayoutBodyProps & { footer?: string }) => {
  return (
    <section
      className={`grid gap-4 md:gap-6 p-2 md:py-6 md:px-4 rounded ${styles.panel} h-full w-full`}
    >
      <DriveThruLink id={DriveThruId}>
        <Title className="mr-2">{title}</Title>
        <OpenInNewWindowIcon />
      </DriveThruLink>
      <div className="grid gap-2 md:gap-4 items-start auto-rows-min">
        {children}
      </div>
      {footer && <footer className="italic text-center">{footer}</footer>}
    </section>
  );
};
