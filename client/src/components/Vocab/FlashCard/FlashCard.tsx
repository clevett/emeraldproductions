import styles from "./styles.module.css";

export const FlashCard = ({
  children,
  customStyle,
}: {
  children: JSX.Element | null | (JSX.Element | null)[];
  customStyle?: string;
}) => {
  return <div className={`${styles.card} ${customStyle}`}>{children}</div>;
};
