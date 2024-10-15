import { ToolLayout } from "@/app/components/tool_layout/ToolLayout";
import { systems } from "@/app/resources";

export default function Layout({ children }: { children: JSX.Element }) {
  const { driveThruId } = systems.sotdl;

  return (
    <ToolLayout DriveThruId={driveThruId} title="Dice Roller">
      {children}
    </ToolLayout>
  );
}
