import { ToolLayout } from "@/app/components";
import { driveThru } from "@/app/resources";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <ToolLayout DriveThruId={driveThru.ftd} title="Five Torches Deep">
      {children}
    </ToolLayout>
  );
}
