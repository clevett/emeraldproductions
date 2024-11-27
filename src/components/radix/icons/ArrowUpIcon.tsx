import { ArrowUpIcon as RadixIcon } from "@radix-ui/react-icons";
export const ArrowUpIcon = ({
  width = "18",
  height = "18",
}: {
  width?: string;
  height?: string;
}) => {
  return <RadixIcon width={width} height={height} />;
};
