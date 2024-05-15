import {
  Resource,
  Texture,
  AnimatedSprite as PixiAnimatedSprite,
} from "pixi.js";
import React, { useEffect, useRef, useState } from "react";
import { AnimatedSprite, useTick } from "@pixi/react";
import { useAppSelector } from "../redux/index.slices";

interface BubbleProps {
  animations: Texture<Resource>[][];
  setBubbles: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  id: string;
}

function Bubble({ animations, setBubbles, id }: BubbleProps) {
  const { height } = useAppSelector((state) => state.windowSize);
  const width = 350;
  const ref = useRef<PixiAnimatedSprite | null>(null);
  const [bubbleStage, setBubbleStage] = useState(1);
  const [isPopped] = useState(true);
  const [bubbleHasSpawned, setBubbleHasSpawned] = useState(false);
  const [curAnimation, setCurAnimation] = useState<Texture<Resource>[]>(
    animations[0]
  );
  const [size, setSize] = useState(1);
  const [tick, setTick] = useState(0);
  useTick(() => {
    if (bubbleHasSpawned) setTick((prev) => prev + 0.1);
  });

  const bubbleProps = {
    anchor: 0.5,
    animationSpeed: 0.2,
    isPlaying: isPopped,
    loop: false,
    interactive: true,
    onpointerdown: function () {
      const { current } = ref;
      if (current) {
        current.play();
      }
    },
    onComplete: function () {
      if (bubbleStage === 1) {
        setCurAnimation(animations[1]);
        setBubbleStage(2);
        setBubbleHasSpawned(true);
        const minSize = 1;
        const maxSize = 1.2;
        const randomSize = minSize + Math.random() * (maxSize - minSize);
        setSize(randomSize);
      }
      if (bubbleStage === 2) {
        
        setBubbles((prev) => prev.filter((bubble) => bubble.key !== id));
      }
    },
  };

  const X_Animation = (tick: number) => {
    if (bubbleHasSpawned) {

      return Math.sin(tick * 0.1) * 100; 
    } else return 0;
  
  };
  const Y_Animation = (tick: number) => {
    if (bubbleHasSpawned) {
      return -10.1 * tick; 
    } else return 0;
  };

  useEffect(() => {

  }, []);

  return (
    <AnimatedSprite
   
      x={(width / 2) + X_Animation(tick)}
      y={(height - 501 / 2) + Y_Animation(tick)}
      scale={size}
      ref={ref}
      textures={curAnimation}
      {...bubbleProps}
    />
  );
}

export default Bubble;
