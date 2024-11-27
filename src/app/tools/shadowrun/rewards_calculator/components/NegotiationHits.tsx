"use client";
import { useState } from "react";
import { useRecoilState } from "recoil";

import { getBaseNuyen } from "../helpers";
import { nuyenBaseAtom } from "../recoil";
import { Heading, Input } from "@/components";

export const NegotiationHits = () => {
  const [value, setValue] = useState("0");
  const [base, setBase] = useRecoilState(nuyenBaseAtom);

  const onSubmit = (value: string) => {
    const num = parseInt(value);
    if (isNaN(num)) {
      setValue(`${(base - 3000) / 100}`);
    } else {
      setBase(getBaseNuyen(num));
    }
  };

  return (
    <div className="grid gap-4 w-fill justify-items-center content-center">
      <Heading as="h4" className="text-center">
        Negotiation Hits
      </Heading>

      <Input
        aria-label="Enter the negotiation net hits"
        defaultValue={value}
        label="negotiation net hits"
        min={0}
        placeholder={value}
        styles="text-center"
        submit={onSubmit}
      />

      <p>
        Base cost may be increased by 100 nuyen per net hit on a Negotiation
        Test at the start of the run. Current base is {base.toLocaleString()}¥.
      </p>
    </div>
  );
};
