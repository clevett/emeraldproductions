import {
  DownloadIcon,
  IconButton,
  ReloadIcon,
  TrashIcon,
} from "@/app/components";
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
        label="delete card"
        onClick={onDelete}
        styles="justify-self-start"
      >
        <TrashIcon />
      </IconButton>
      <IconButton
        label="download card"
        onClick={onDownload}
        styles="justify-self-end"
      >
        <DownloadIcon />
      </IconButton>
      <IconButton
        label="download card"
        onClick={onRefresh}
        styles="justify-self-end"
      >
        <ReloadIcon />
      </IconButton>
    </div>
  );
};
