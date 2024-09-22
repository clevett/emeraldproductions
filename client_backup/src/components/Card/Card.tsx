import styles from "./styles.module.css";
export const Card = ({
  children,
}: {
  children: JSX.Element | null | (JSX.Element | null)[];
}) => {
  return <div className={`${styles.card}`}>{children}</div>;
};
