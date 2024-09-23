import Link from "next/link";

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
      className="inline-flex"
      href={driveThru(id)}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </Link>
  );
};
