import styles from "./styles.module.css";

export const ToolTip = ({
  children,
  content,
}: {
  children: JSX.Element;
  content: string;
}) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <span className={styles.tooltiptext}>{content}</span>
    </div>
  );
};
