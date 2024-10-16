import buttonStyles from "./Button.module.css";

export const Button = ({
  children,
  onClick,
  styles,
}: {
  children: React.ReactNode;
  onClick: () => void;
  styles?: string;
}) => {
  return (
    <button
      className={`cursor-pointer bg-green-800 rounded p-2 ${buttonStyles.button} ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
