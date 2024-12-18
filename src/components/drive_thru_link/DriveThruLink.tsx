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
      className={`underline hover:underline decoration-sky-500 sm:no-underline text-nowrap text-ellipsis overflow-hidden w-full inline-flex justify-center`}
      href={driveThru(id)}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </Link>
  );
};

export default DriveThruLink;
