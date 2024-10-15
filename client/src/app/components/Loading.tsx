import { Spinner } from "@radix-ui/themes";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Spinner size="3" />
    </div>
  );
};
