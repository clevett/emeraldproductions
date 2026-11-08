import { ToolContent } from "@/components/ToolLayout";
import { systems } from "@/resources";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { driveThruId } = systems.sotdl;

  return (
    <ToolContent DriveThruId={driveThruId} title="Dice Roller">
      {children}
    </ToolContent>
  );
}
