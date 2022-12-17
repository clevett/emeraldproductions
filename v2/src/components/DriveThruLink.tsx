import { EuiLink } from "@elastic/eui";

export const DriveThruLink = ({
  id,
  children,
}: {
  id: string;
  children: JSX.Element[] | JSX.Element;
}) => {
  const url = `https://www.drivethrurpg.com/product/${id}/?affiliate_id=879798`;
  return (
    <EuiLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "inline-flex" }}
    >
      {children}
    </EuiLink>
  );
};
