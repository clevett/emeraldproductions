import { EuiSwitch } from "@elastic/eui";
import { useState } from "react";
import { TerrainType } from "../TravelTool";

export const TerrainSwitch = ({
  onChange,
  terrain,
}: {
  onChange: () => void;
  terrain: TerrainType;
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    onChange();
  };

  return (
    <EuiSwitch
      aria-describedby={terrain.name}
      checked={checked}
      compressed
      label={terrain.name}
      onChange={handleChange}
    />
  );
};
