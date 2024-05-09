import styles from "./styles.module.css";

export const Card = ({
  children,
  customStyle,
}: {
  children: JSX.Element | null | (JSX.Element | null)[];
  customStyle?: string;
  isActive?: boolean;
}) => {
  const backgroundColor = "bg-gray-700";

  return (
    <div className={`${styles.card} ${backgroundColor} ${customStyle}`}>
      {children}
    </div>
  );
};
