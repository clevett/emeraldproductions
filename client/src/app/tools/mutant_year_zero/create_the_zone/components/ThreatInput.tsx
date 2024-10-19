"use client";
import { useRecoilState } from "recoil";
import { useState } from "react";

import { threatLevelAtom } from "../recoil";

import styles from "./ThreatInput.module.css";

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
    <div className="grid gap-4">
      <div className={`grid ${styles.inputGrid} gap-4`}>
        <h3>Threat Level</h3>
        <input
          aria-label="Enter threat level"
          className="text-center rounded"
          max={20}
          min={1}
          onBlur={onBlur}
          onChange={(e) => setValue(e.target.value)}
          placeholder="2"
          value={value}
        />
      </div>
      <p>
        1–4 Fringe Zone Sectors, 5–8 Central Zone Sectors, 9+ Unusually
        Dangerous Areas
      </p>
    </div>
  );
};
