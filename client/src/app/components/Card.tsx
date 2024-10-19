import cardStyles from "./Card.module.css";
export const Card = ({
  children,
  styles,
  height = "560px",
  width = "375px",
}: {
  children: JSX.Element | null | (JSX.Element | null)[];
  styles?: string;
  height?: string;
  width?: string;
}) => {
  return (
    <div
      className={`${cardStyles.card} ${styles ? styles : ""}`}
      style={{
        height: height,
        width: width,
      }}
    >
      {children}
    </div>
  );
};
