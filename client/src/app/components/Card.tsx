import cardStyles from "./Card.module.css";

const types = {
  auto: {
    height: "auto",
    width: "auto",
  },
  long: {
    height: "560px",
    width: "350px",
  },
  wide: {
    height: "350px",
    width: "560px",
  },
  business: {
    height: "250px",
    width: "500px",
  },
};

export const Card = ({
  children,
  styles,
  type = "auto",
  height = types[type].height,
  width = types[type].width,
}: {
  children: JSX.Element | null | (JSX.Element | null)[];
  styles?: string;
  height?: string;
  width?: string;
  type?: keyof typeof types;
}) => {
  return (
    <div
      className={`rounded ${cardStyles.card} ${styles ? styles : ""}  `}
      style={{
        width,
        height,
        maxHeight: height,
        maxWidth: width,
      }}
    >
      {children}
    </div>
  );
};
