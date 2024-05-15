import { Sprite, useTick } from "@pixi/react";
import { Resource, Texture } from "pixi.js";
import { useAppSelector } from "../redux/index.slices";
import { useState } from "react";

interface BlownBubbleProps {
  loaded: boolean;
  texture: Texture<Resource> | undefined;
}

const BlownBubble = ({ loaded, texture }: BlownBubbleProps) => {
  const [tick, setTick] = useState(0);
  useTick(() => {
    if(tick < 150) {
    setTick((tick) => tick + 0.15);
    }
    else {
      setTick(0)
    }
  });
  const { unitHeight, unitWidth } = useAppSelector(
    (state) => state.windowSize
  );
  if (!loaded && !texture) return null;

  return (
    <Sprite
      x={unitWidth * 32 + tick}
      y={unitHeight * 48 -tick}
      height={unitHeight * 5 + tick}
      width={unitWidth * 2 + tick}
      texture={texture}
    />
  );
};

export default BlownBubble;
