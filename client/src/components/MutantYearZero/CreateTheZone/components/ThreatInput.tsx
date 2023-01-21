import { EuiFieldText, EuiTitle, EuiText } from "@elastic/eui";
import { useRecoilState } from "recoil";
import { useState } from "react";

import { threatLevelAtom } from "../recoil";

import styles from "../styles.module.css";

export const ThreatInput = () => {
  const [value, setValue] = useState("3");
  const [base, setBase] = useRecoilState(threatLevelAtom);

  const onBlur = () => {
    const num = parseInt(value);
    if (isNaN(num)) {
      setValue(`${base}`);
    } else {
      const v = num < 1 ? 1 : num > 20 ? 20 : num;
      setBase(v);

      if (v !== num) {
        setValue(`${v}`);
      }
    }
  };

  return (
    <div className={`grid`}>
      <div className={`grid ${styles.inputGrid} gap-4`}>
        <EuiTitle className="text-left" size="s">
          <h5>Threat Level</h5>
        </EuiTitle>
        <EuiFieldText
          aria-label="Enter threat level"
          className="text-center"
          max={20}
          min={1}
          onBlur={onBlur}
          onChange={(e) => setValue(e.target.value)}
          placeholder="2"
          value={value}
        />
      </div>
      <EuiText>
        1–4 Fringe Zone Sectors, 5–8 Central Zone Sectors, 9+ Unusually
        Dangerous Areas
      </EuiText>
    </div>
  );
};
