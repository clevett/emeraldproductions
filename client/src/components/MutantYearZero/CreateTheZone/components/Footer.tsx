import { EuiButtonIcon } from "@elastic/eui";

import styles from "../styles.module.css";

export const Footer = ({
  onRefresh,
  onDelete,
  onDownload,
}: {
  onRefresh: () => void;
  onDelete: () => void;
  onDownload: () => void;
}) => {
  return (
    <div className={`${styles.footer}`}>
      <EuiButtonIcon
        aria-label={`flip the card`}
        className="justify-self-start"
        color="danger"
        iconType="trash"
        onClick={onDelete}
      />
      <EuiButtonIcon
        aria-label={`flip the card`}
        className="justify-self-center"
        iconType="download"
        onClick={onDownload}
      />
      <EuiButtonIcon
        aria-label={`flip the card`}
        className="justify-self-end"
        iconType="refresh"
        onClick={onRefresh}
      />
    </div>
  );
};
