import { Sidebar } from "@/app/components";

import styles from "./layout.module.css";

export default function ToolLayout({ children }: { children: JSX.Element }) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      {children}
    </div>
  );
}
