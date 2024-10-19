import { ToolLayout } from "@/app/components";
import { systems } from "@/app/resources";

export default function Layout({ children }: { children: JSX.Element }) {
  const { driveThruId, title } = systems.myz;

  return (
    <ToolLayout DriveThruId={driveThruId} title={title}>
      {children}
    </ToolLayout>
  );
}
