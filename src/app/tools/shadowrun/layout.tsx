"use client";
import { ToolContent } from "@/components";
import { systems } from "@/resources";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: JSX.Element }) {
  const pathname = usePathname();
  const { sr6e, sr5e } = systems;
  const isSR6e = !!sr6e.list
    .map((e) => e.path)
    .find((e) => pathname.includes(e));
  const { driveThruId, title } = isSR6e ? sr6e : sr5e;

  return (
    <ToolContent DriveThruId={driveThruId} title={title}>
      {children}
    </ToolContent>
  );
}
