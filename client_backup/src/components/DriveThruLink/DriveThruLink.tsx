import { EuiLink } from "@elastic/eui";
import { driveThru } from "../../routes/external";

export const DriveThruLink = ({
  id,
  children,
}: {
  id: string;
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <EuiLink
      className="inline-flex"
      href={driveThru(id)}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </EuiLink>
  );
};
