"use client";

import { TextField } from "@radix-ui/themes";
import { useState } from "react";

export const Input = ({
  defaultValue = "",
  label,
  max,
  min,
  placeholder,
  styles,
  submit,
}: {
  defaultValue?: string;
  label: string;
  max?: number;
  min?: number;
  placeholder: string;
  styles?: string;
  submit: (arg: string) => void;
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      submit(value);
    }
  };

  const onBlur = () => {
    if (min && max) {
      const num = parseInt(value);
      if (isNaN(num)) {
        setValue(defaultValue);
      } else {
        const v = num < min ? min : num > max ? max : num;
        submit(value);

        if (v !== num) {
          setValue(`${v}`);
        }
      }
    }
  };

  return (
    <TextField.Root
      aria-label={label}
      className={`${styles}`}
      max={max}
      min={min}
      onBlur={onBlur}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      onSubmit={() => submit(value)}
      placeholder={placeholder}
      value={value}
    />
  );
};
