import { TrashIcon as RadixTrash } from "@radix-ui/react-icons";
export const TrashIcon = ({
  width = "18",
  height = "18",
}: {
  width?: string;
  height?: string;
}) => {
  return <RadixTrash width={width} height={height} />;
};
