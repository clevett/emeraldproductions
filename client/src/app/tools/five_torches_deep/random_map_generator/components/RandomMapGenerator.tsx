"use client";

import { useState } from "react";
import { Box } from "./Box";
import { Button } from "@/app/components";

import styles from "./RandomMapGenerator.module.css";

export const RandomMapGenerator = () => {
  const [refresh, setRefresh] = useState(false);

  const handleClick = () => setRefresh(!refresh);

  return (
    <div>
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
      <Button styles="mt-5" onClick={handleClick} name="Generator New Map" />
    </div>
  );
};
