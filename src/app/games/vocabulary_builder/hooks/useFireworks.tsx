"use client";
import { Fireworks } from "fireworks-js";

import { useRecoilValue } from "recoil";
import { gameOverSelector } from "../recoil/selectors";
import { useEffect, useState } from "react";
import { set } from "@recoiljs/refine";

export const useFireworks = () => {
  const isGameOver = useRecoilValue(gameOverSelector);
  const [fireworks, setFireworks] = useState<Fireworks | undefined>(undefined);
  const [canvasElement, setCanvasElement] = useState<
    HTMLCanvasElement | HTMLDivElement | null
  >(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (canvasElement === null) {
      return;
    }

    if (canvasElement && fireworks === undefined) {
      const fw = new Fireworks(canvasElement);
      setFireworks(fw);
    }
  }, [canvasElement, fireworks]);

  if (fireworks && isGameOver && !isPlaying) {
    fireworks.start();
    setIsPlaying(true);
  }

  if (fireworks && isPlaying && !isGameOver) {
    fireworks.stop();
    setIsPlaying(false);
  }

  const canvas = (
    <canvas
      className="w-full h-full pointer-events-none absolute z-10 top-0 left-0 fireworks"
      id="fireworks"
      ref={setCanvasElement}
    />
  );

  return {
    fireworks,
    canvas,
  };
};
