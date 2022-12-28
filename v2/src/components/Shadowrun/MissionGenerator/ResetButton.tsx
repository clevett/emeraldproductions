import { EuiButton } from "@elastic/eui";
import { useRecoilCallback } from "recoil";
import { selectMissionFamily } from "./recoil";

export const ResetButton = () => {
  const resetOptions = useRecoilCallback(
    ({ set, reset }) =>
      () => {
        reset(selectMissionFamily);
      },
    []
  );

  return (
    <EuiButton fill color="warning" onClick={() => resetOptions()}>
      Generate Mission
    </EuiButton>
  );
};
