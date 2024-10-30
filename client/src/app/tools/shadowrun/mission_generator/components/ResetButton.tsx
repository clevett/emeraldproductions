import { Button } from "@/app/components";
import { useRecoilCallback } from "recoil";
import { selectMissionFamily } from "../recoil";

export const ResetButton = () => {
  const resetOptions = useRecoilCallback(
    ({ reset }) =>
      () => {
        reset(selectMissionFamily);
      },
    []
  );

  return <Button onClick={() => resetOptions()}>Generate Mission</Button>;
};
