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
      <div className="justify-self-center text-center w-full text-nowrap text-ellipsis overflow-hidden">
        <DriveThruLink id={DriveThruId}>
          <Title className="sm:mr-2">{title}</Title>
          <div className="hidden sm:flex items-center">
            <OpenInNewWindowIcon height="12" width="12" />
          </div>
        </DriveThruLink>
      </div>

      <div className="grid gap-2 md:gap-4 items-start auto-rows-min">
        <div className="flex flex-col gap-4 items-center">{children}</div>
      </div>

      {footer && <footer className="italic text-center">{footer}</footer>}
    </>
  );
};
