import { EuiSwitch } from "@elastic/eui";
import { useState } from "react";

export const Switch = ({
  onChange,
  name,
}: {
  onChange: () => void;
  name: string;
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    onChange();
  };

  return (
    <EuiSwitch
      aria-describedby={name}
      checked={checked}
      label={name}
      onChange={handleChange}
    />
  );
};
