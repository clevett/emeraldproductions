"use client";
import React, { useState } from "react";

import { heat } from "@/data";
import {
  Button,
  Heading,
  IconButton,
  ReloadIcon,
  Switch,
  Loading,
} from "@/components";
import { useDiceBox } from "@/app/tools/diceroller/hooks/useDiceBox";

type Circumstance = (typeof heat)[0];

export const Heat = () => {
  const [circumstances, setCircumstances] = useState<Circumstance[]>([]);
  const { roll, isLoading, canvas, result, clear, isRolling } = useDiceBox();

  const switchToggle = (e: Circumstance) => {
    if (circumstances.includes(e)) {
      const filter = circumstances.filter((c) => c !== e);
      setCircumstances(filter);
    } else {
      setCircumstances([...circumstances, e]);
    }
  };

  const values = circumstances.map((e) => e.value);
  const modifier = values.reduce((a, b) => a + b, 0);
  const total = result?.value;

  const earned = !total
    ? null
    : total && total > 15
    ? 2
    : total && total > 9
    ? 1
    : 0;

  const message =
    earned === 2 || earned === 1
      ? `Runners earn ${earned} heat.`
      : total !== undefined
      ? "Runners earn no heat."
      : "At the end of every game session.";

  const color =
    earned === 2
      ? "text-red-600"
      : earned === 1
      ? "text-orange-600"
      : earned === 0
      ? "text-green-600"
      : "default";

  const pos = values.filter((n) => n > 0).reduce((a, b) => a + b, 0);
  const neg = values.filter((n) => n < 0).reduce((a, b) => a + b, 0);

  return (
    <div className="flex-col justify-center gap-4 flex-wrap">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid gap-6 w-full ">
          <div className="grid w-full gap-6">
            <div className="min-h-6">
              {isRolling ? <Loading /> : <p className={color}>{message}</p>}
            </div>

            <Heading as="h3">
              Positive Circumstances{pos ? ` (${pos})` : null}
            </Heading>
            {heat.map((e, index) => (
              <React.Fragment key={`circumstance-${index}`}>
                {index === 7 && (
                  <Heading as="h3">
                    Negative Circumstances{neg ? ` (${neg})` : null}
                  </Heading>
                )}
                <Switch
                  defaultChecked={circumstances.includes(e)}
                  label={e.description}
                  onChange={() => switchToggle(e)}
                  checked={circumstances.includes(e)}
                />
              </React.Fragment>
            ))}
          </div>
          <div className="grid gap-4 grid-flow-col auto-cols-min">
            <Button
              className="self-center min-w-[100px] max-w-[200px] h-full"
              onClick={() => roll(`2d6+(${modifier})`)}
            >
              Roll Heat
            </Button>
            <IconButton
              aria-label="clear dice"
              onClick={() => {
                clear();
                setCircumstances([]);
              }}
            >
              <ReloadIcon />
            </IconButton>
          </div>
        </div>
      )}
      {canvas}
    </div>
  );
};
