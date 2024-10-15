import { ToolLayout } from "@/app/components/tool_layout/ToolLayout";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <ToolLayout DriveThruId="155572" subtitle="" title="Dice Roller">
      {children}
    </ToolLayout>
  );
}
