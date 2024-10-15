import { ToolLayout } from "@/app/components/tool_layout/ToolLayout";
import { driveThru } from "@/app/resources";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <ToolLayout DriveThruId={driveThru.sotdl} subtitle="" title="Dice Roller">
      {children}
    </ToolLayout>
  );
}
