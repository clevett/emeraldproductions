import { EuiSwitch } from "@elastic/eui";
import { useState } from "react";

export const NavigatorSwitch = ({
  onChange,
}: {
  onChange: (status: boolean) => void;
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    const status = !checked;
    setChecked(status);
    onChange(status);
  };

  return (
    <EuiSwitch
      aria-describedby="Navigator"
      checked={checked}
      label="Navigator"
      onChange={handleChange}
    />
  );
};
