import styles from "./layout.module.scss";

export default function ToolsLayout({ children }: { children: JSX.Element }) {
  return (
    <section
      className={`grid gap-4 p-2 overflow-hidden sm:p-4 md:gap-6 md:py-6 md:px-4 rounded h-full w-full ${styles.panel} `}
    >
      {children}
    </section>
  );
}
