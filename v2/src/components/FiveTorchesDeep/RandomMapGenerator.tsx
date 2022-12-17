import { EuiButton, EuiPanel, EuiSpacer, EuiTitle } from "@elastic/eui";
import { useState } from "react";
import { DriveThruLink } from "../DriveThruLink";
import Box from "./components/Box";

export const RandomMapGenerator = () => {
  const [refresh, setRefresh] = useState(false);

  const handleClick = () => setRefresh(!refresh);

  return (
    <>
      <DriveThruLink id="264584">
        <EuiTitle size="l">
          <h2>Five Torches Deep</h2>
        </EuiTitle>
      </DriveThruLink>
      <EuiSpacer />
      <EuiTitle size="s">
        <h3>Random Map Generator</h3>
      </EuiTitle>
      <EuiSpacer />
      <EuiPanel hasShadow={false} paddingSize="none" className="w-full">
        <div
          key={`map-${refresh}`}
          className="grid grid-cols-3 grid-rows-3 border-2 border-solid border-black"
          style={{ width: "600px", height: "600px" }}
        >
          <Box name="Northwest" />
          <Box name="North" />
          <Box name="Northeast" />

          <Box name="West" />
          <Box name="Center" />
          <Box name="East" />

          <Box name="Southwest" />
          <Box name="South" />
          <Box name="Southeast" />
        </div>
        <EuiButton className="mt-5" onClick={handleClick} fill>
          Generator New Map
        </EuiButton>
      </EuiPanel>
    </>
  );
};
