import {
  EuiFlexGroup,
  EuiButton,
  EuiLoadingSpinner,
  EuiTitle,
} from "@elastic/eui";
import React from "react";
import { useState } from "react";
import { useDiceRoller } from "../DiceRoller";
import { LayoutBody } from "../LayoutBody";
import { Switch } from "../Switch";
import { heat } from "./Heat/data";

type Circumstance = typeof heat[0];

export const Heat = () => {
  const [circumstances, setCircumstances] = useState<Circumstance[]>([]);
  const { roll, isLoading, canvas, result } = useDiceRoller();

  const switchToggle = (e: Circumstance) => {
    if (circumstances.includes(e)) {
      const filter = circumstances.filter((c) => c !== e);
      setCircumstances(filter);
    } else {
      setCircumstances([...circumstances, e]);
    }
  };

  const modifier = circumstances.map((e) => e.value).reduce((a, b) => a + b, 0);
  const total = result?.value;
  console.table({ modifier, total });

  return (
    <LayoutBody
      DriveThruId="115985"
      subtitle="Heat"
      title="Shadowrun 6th Edition"
    >
      <EuiFlexGroup className="flex-col justify-center gap-4 flex-wrap">
        <>
          {isLoading ? (
            <EuiLoadingSpinner size="s" />
          ) : (
            <div className="grid gap-6 w-full ">
              <EuiButton
                aria-label="flip the card"
                className="self-center min-h-[50px] max-w-[100px] w-6 h-full"
                onClick={() => roll(`2d6+(${modifier})`)}
                size="m"
              >
                Roll Heat
              </EuiButton>
              <div className="grid w-full gap-6">
                <EuiTitle size="s">
                  <h4>Positive Circumstances</h4>
                </EuiTitle>
                {heat.map((e, index) => (
                  <React.Fragment key={`circumstance-${index}`}>
                    {index === 7 ? (
                      <EuiTitle size="s">
                        <h4>Negative Circumstances</h4>
                      </EuiTitle>
                    ) : null}
                    <Switch
                      name={e.description}
                      onChange={() => switchToggle(e)}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
          {canvas}
        </>
      </EuiFlexGroup>
    </LayoutBody>
  );
};
