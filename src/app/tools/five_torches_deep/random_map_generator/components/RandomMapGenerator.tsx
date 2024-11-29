"use client";

import { useState } from "react";
import { Box } from "./ColorBox";
import { Button } from "@/components";

export const RandomMapGenerator = () => {
  const [refresh, setRefresh] = useState(false);

  const handleClick = () => setRefresh(!refresh);

  return (
    <div className="grid gap-4 auto-rows-max items-start">
      <div
        key={`map-${refresh}`}
        className={`grid grid-cols-3 grid-rows-3 border-2 border-solid border-black shadow-2xl 
          
          md:h-[600px] md:w-[600px]`}
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
      <Button
        styles="mt-5 max-w-fit"
        onClick={handleClick}
        name="Generator New Map"
      />
    </div>
  );
};
