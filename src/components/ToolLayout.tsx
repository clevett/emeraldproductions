import { DriveThruLink, Title, OpenInNewWindowIcon } from "@/components";

interface LayoutBodyProps {
  children: JSX.Element | (JSX.Element | null)[] | null;
  DriveThruId: string;
  subtitle?: string;
  title: string;
}

export const ToolContent = ({
  children,
  DriveThruId,
  footer,
  title,
}: LayoutBodyProps & { footer?: string }) => {
  return (
    <>
      <div className="justify-self-center">
        <DriveThruLink id={DriveThruId}>
          <Title className="mr-2">{title}</Title>
          <OpenInNewWindowIcon height="12" width="12" />
        </DriveThruLink>
      </div>

      <div className="grid gap-2 md:gap-4 items-start auto-rows-min">
        <div className="flex flex-col gap-4 items-center">{children}</div>
      </div>

      {footer && <footer className="italic text-center">{footer}</footer>}
    </>
  );
};
