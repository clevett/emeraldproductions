import { ToolLayout } from "@/components/tool_layout/ToolLayout";
import { systems } from "@/resources";

export default function Layout({ children }: { children: JSX.Element }) {
  const { driveThruId } = systems.sotdl;

  return (
    <ToolLayout DriveThruId={driveThruId} title="Dice Roller">
      {children}
    </ToolLayout>
  );
}
