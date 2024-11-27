import { ToolLayout } from "@/components";
import { systems } from "@/resources";

export default function Layout({ children }: { children: JSX.Element }) {
  const { driveThruId, title } = systems.sotdl;

  return (
    <ToolLayout
      DriveThruId={driveThruId}
      title={title}
      footer="Shadow of the Demon Lord is (c) 2014-2020 Schwalb Entertainment, LLC. All rights reserved. Material here used with permission."
    >
      {children}
    </ToolLayout>
  );
}
