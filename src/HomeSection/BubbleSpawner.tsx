import { useEffect, useState } from "react";
import { Container, Sprite, useApp } from "@pixi/react";

import AssetsLoader from "../utils/AssetsController";
import {
  Resource,
  Texture,
} from "pixi.js";
import Bubble from "./Bubble";
import { useAppSelector } from "../redux/index.slices";

function BubbleSpawner() {
  const [animations, setAnimations] = useState<Texture<Resource>[][]>([]);
  const [pipeTexture, setPipeTexture] = useState<Texture<Resource>>();
  const [loading, setLoading] = useState(true);
  const [bubbles, setBubbles] = useState<JSX.Element[]>([]);
  const [firstBubbleIsReady, setFirstBubbleIsReady] = useState(false);
  const { height } = useAppSelector((state) => state.windowSize);
  const width = 350;
  const maximumBubbles = 6;

  const app = useApp();

  useEffect(() => {
    if (loading) {
      (async () => {
        const spawnAnimation = (await AssetsLoader.loadAssetsBundle(
          "spawn"
        )) as Texture<Resource>[];

        const splashAnimation = (await AssetsLoader.loadAssetsBundle(
          "splash"
        )) as Texture<Resource>[];

        const pipeTexture = (await AssetsLoader.loadAssetsBundle(
          "pipe"
        )) as Texture<Resource>;

        if (spawnAnimation && splashAnimation && pipeTexture) {
          setAnimations([spawnAnimation, splashAnimation]);
          setPipeTexture(pipeTexture);
          setLoading(false);
          setFirstBubbleIsReady(true);
        }
      })();
    }
  }, [loading]);

  useEffect(() => {
    if (firstBubbleIsReady) {
      setBubbles([
        <Bubble
          key={"firstBubble"}
          id={"firstBubble"}
          animations={animations}
          setBubbles={setBubbles}
        />,
      ]);
      setFirstBubbleIsReady(false);
    }
  }, [firstBubbleIsReady]);
  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        if (bubbles.length == maximumBubbles - 1) {
          
          setBubbles((prev) => {
            prev.shift();
            return [...prev];
          });
        }
        if (bubbles.length < maximumBubbles) {
          const id = Math.random().toString();
          const newBubble = (
            <Bubble
              
              key={id}
              id={id}
              animations={animations}
              setBubbles={setBubbles}
            />
          );

          setBubbles((prev) => [...prev, newBubble]);
        }
      }, 4000);

      console.log(app)
      return () => clearInterval(interval);

      
    }
  }, [loading, bubbles]);

  useEffect(() => {
    if (app) {
 
      if (!loading) {
      //   const theContainer = app.stage.getChildByName(
      //     "theContainer"
      //   ) as PixiContainer<DisplayObject>;
      //  theContainer.getChildByName(
      //     "BubbleSpawnerContainer"
      //   ) as PixiContainer<DisplayObject>;

        // const sprite = new PixiSprite(pipeTexture);

        // thisContainer.addChild(sprite);
      }

      // const thisContainer = parentContainer.getChildAt(0)
      // //@ts-expect-error // Compiler warns about APP ERROR👌
    }
  }, [loading, height, width]);

  return (
    <Container name={"BubbleSpawnerContainer"}>
      {!loading ? (
        <>
          <Sprite
            anchor={0.5}
            y={(height - 250 )}
            x={width / 2}
            name={"pidePiper"}
            texture={pipeTexture}
          />
          {bubbles.map((Bubble) => {
            return Bubble;
          })}
        </>
      ) : null}
    </Container>
  );
}

export default BubbleSpawner;
