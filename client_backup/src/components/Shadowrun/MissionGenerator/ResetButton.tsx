import { EuiButton } from "@elastic/eui";
import { useRecoilCallback } from "recoil";
import { selectMissionFamily } from "./recoil";

export const ResetButton = () => {
  const resetOptions = useRecoilCallback(
    ({ reset }) =>
      () => {
        reset(selectMissionFamily);
      },
    []
  );

  return (
    <EuiButton color="primary" onClick={() => resetOptions()}>
      Generate Mission
    </EuiButton>
  );
};
