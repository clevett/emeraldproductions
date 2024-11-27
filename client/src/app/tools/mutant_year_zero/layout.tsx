import { ToolLayout } from "@/components";
import { systems } from "@/resources";

export default function Layout({ children }: { children: JSX.Element }) {
  const { driveThruId, title } = systems.myz;

  return (
    <ToolLayout DriveThruId={driveThruId} title={title}>
      {children}
    </ToolLayout>
  );
}
