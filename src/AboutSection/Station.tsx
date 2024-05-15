import { Texture, Resource } from "pixi.js";
import { useEffect, useState } from "react";
import AssetsLoader from "../utils/AssetsController";
import { Container, Sprite } from "@pixi/react";
import { useAppSelector } from "../redux/index.slices";

const Station = () => {
  const [assetLoaded, setAssetLoaded] = useState(false);

  const [pipes, setPipes] = useState<Texture<Resource>>();
  const { width } = useAppSelector((state) => state.windowSize);

  useEffect(() => {
    if (assetLoaded) return;
    (async () => {
      const pipes = await AssetsLoader.loadAssetsBundle(
        "pipes"
      ) as Texture<Resource>;
      const hello = await AssetsLoader.loadAssetsBundle(
        "hello"
      ) as Texture<Resource>;
      console.log(hello)
      setPipes(pipes);
      setAssetLoaded(true);
    })();
  }, [assetLoaded]);
  if (!assetLoaded) return null;

  return (
    <Container>
      <Sprite
        name="pipes"
        zIndex={3}
        x={ (width /2)}
        y={(447 / 2)}
        anchor={0.5}
        texture={pipes}
      />
      
    </Container>
  );
};

export default Station;
