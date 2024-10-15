import { IconButton } from "@radix-ui/themes";
import { TrashIcon as RadixTrash } from "@radix-ui/react-icons";
export const TrashIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconButton
      aria-label="clear dice results"
      className="self-center"
      onClick={onClick}
      variant="ghost"
    >
      <RadixTrash width="18" height="18" />
    </IconButton>
  );
};
