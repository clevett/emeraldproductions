"use client";
import { useRecoilState } from "recoil";

import { Callout, Heading, Input } from "@/components";

import { threatLevelAtom } from "../recoil";

import styles from "./ThreatInput.module.css";

export const ThreatInput = () => {
  const [base, setBase] = useRecoilState(threatLevelAtom);

  return (
    <div className="grid gap-4">
      <div className={`grid ${styles.inputGrid} gap-4`}>
        <Heading as="h3">Threat Level</Heading>
        <Input
          defaultValue={`${base}`}
          label="Enter threat level"
          max={20}
          min={1}
          placeholder="2"
          styles="text-center"
          submit={(value: string) => setBase(parseInt(value))}
        />
      </div>
      <Callout className="max-w-fit">
        <span>
          1–4 Fringe Zone Sectors, 5–8 Central Zone Sectors, 9+ Unusually
          Dangerous Areas
        </span>
      </Callout>
    </div>
  );
};
