import { Sidebar } from "@/app/components";

export default function ToolsLayout({ children }: { children: JSX.Element }) {
  return (
    <div className={`flex flex-direction-row  lg:pr-6 h-full w-full`}>
      <Sidebar />
      {children}
    </div>
  );
}
