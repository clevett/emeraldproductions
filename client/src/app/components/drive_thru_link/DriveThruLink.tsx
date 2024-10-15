import Link from "next/link";

import styles from "./DriveThruLink.module.css";

const driveThru = (id: string) =>
  `https://www.drivethrurpg.com/product/${id}/?affiliate_id=879798`;

export const DriveThruLink = ({
  id,
  children,
}: {
  id: string;
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <Link
      className={styles.link}
      href={driveThru(id)}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </Link>
  );
};

export default DriveThruLink;
