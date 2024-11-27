import { ToolContent } from "@/components";
import { systems } from "@/resources";

export default function Layout({ children }: { children: JSX.Element }) {
  const { driveThruId, title } = systems.ftd;

  return (
    <ToolContent DriveThruId={driveThruId} title={title}>
      {children}
    </ToolContent>
  );
}
