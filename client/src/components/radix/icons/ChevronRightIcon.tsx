import { ChevronRightIcon as RadixIcon } from "@radix-ui/react-icons";
export const ChevronRightIcon = ({
  width = "18",
  height = "18",
}: {
  width?: string;
  height?: string;
}) => {
  return <RadixIcon width={width} height={height} />;
};
