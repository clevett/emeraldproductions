import { DownloadIcon, IconButton, ReloadIcon, TrashIcon } from "@/components";
import styles from "./Footer.module.css";

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
    <div className={`${styles.footer} gap-2`}>
      <IconButton
        aria-label="delete card"
        onClick={onDelete}
        className="justify-self-start"
      >
        <TrashIcon />
      </IconButton>
      <IconButton
        aria-label="download card"
        onClick={onDownload}
        className="justify-self-center"
      >
        <DownloadIcon />
      </IconButton>
      <IconButton
        aria-label="download card"
        onClick={onRefresh}
        className="justify-self-end"
      >
        <ReloadIcon />
      </IconButton>
    </div>
  );
};
