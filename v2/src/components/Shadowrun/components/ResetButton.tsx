import { EuiButton } from "@elastic/eui";
import { useRecoilCallback } from "recoil";
import { selectOperationFamily } from "../recoil";

export const ResetButton = () => {
  const resetOptions = useRecoilCallback(
    ({ set, reset }) =>
      () => {
        reset(selectOperationFamily);
      },
    []
  );

  return (
    <EuiButton fill color="warning" onClick={() => resetOptions()}>
      Generate Mission
    </EuiButton>
  );
};
