import { EuiButton } from "@elastic/eui";
import { useState } from "react";
import { LayoutBody } from "../LayoutBody";
import Box from "./components/Box";

import styles from "./styles.module.css";

export const RandomMapGenerator = () => {
  const [refresh, setRefresh] = useState(false);

  const handleClick = () => setRefresh(!refresh);

  return (
    <LayoutBody
      title="Five Torches Deep"
      subtitle="Random Map Generator"
      DriveThruId="264584"
    >
      <div
        key={`map-${refresh}`}
        className={`grid grid-cols-3 grid-rows-3 border-2 border-solid border-black ${styles.map}`}
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
    </LayoutBody>
  );
};
