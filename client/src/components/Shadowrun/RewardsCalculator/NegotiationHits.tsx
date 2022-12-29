import { EuiTitle, EuiSpacer, EuiFieldText, EuiText } from "@elastic/eui";
import { useState } from "react";
import { useRecoilState } from "recoil";

import { getBaseNuyen } from "./helpers";
import { nuyenBaseAtom } from "./recoil";

export const NegotiationHits = () => {
  const [value, setValue] = useState("0");
  const [base, setBase] = useRecoilState(nuyenBaseAtom);

  const onBlur = () => {
    const num = parseInt(value);
    if (isNaN(num)) {
      setValue(`${(base - 3000) / 100}`);
    } else {
      setBase(getBaseNuyen(num));
    }
  };

  return (
    <div className="grid w-fill justify-center content-center">
      <EuiTitle className="text-center" size="s">
        <h5>Negotiation Hits</h5>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiFieldText
        onBlur={onBlur}
        className="text-center"
        aria-label="Enter the highest opposed dice pool"
        onChange={(e) => setValue(e.target.value)}
        placeholder="0"
        value={value}
      />
      <EuiSpacer size="s" />
      <EuiText>
        Base cost may be increased by 100 nuyen per net hit on a Negotiation
        Test at the start of the run. Current base is {base.toLocaleString()}¥.
      </EuiText>
    </div>
  );
};
