import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { useAppSelector } from "../redux/index.slices";
import { Container as PixiContainer, DisplayObject, Mesh, Graphics as PixiGraphic } from "pixi.js";
import { Container, Graphics, useApp, useTick } from "@pixi/react";
import createWaveMesh from "../shaders/waveShader";
import Grains from "../ScreenView/Grains";

const Sea = () => {
  const { width, height, unitHeight } = useAppSelector((state) => state.windowSize);
  const [seaMesh, setSeaMesh] = useState<Mesh[] | null>(null);
  const mask = useRef<PixiGraphic>(null);
  const app = useApp();
  const memoApp = useMemo(() => {
    return app;
  }, [app]);
  useTick(() => {
    if (!seaMesh) return;
    seaMesh[0].shader.uniforms.time += 0.0015
    // seaMesh[1].shader.uniforms.time += 0.0015
        // seaContainer.shader.uniforms.time += 0.001;
  });

  const sea = {
    ocean_color: "#3BE099",
    ocean_height: 100, // 490 is the height of the station image
    ocean_pos: 640 ,
  };

  const seaDrawing = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (g:any) => {
      // sea surface back 🦆
      g.clear();
      g.beginFill(sea.ocean_color);
      g.drawCircle(0, 0, 50);
      g.endFill();
      
    },
    [width, height]
  );

  useEffect(() => {
    if(!memoApp || unitHeight === 0 ) return;

    const seaContainer = memoApp.stage.getChildByName("seaContainer") as PixiContainer<DisplayObject>;
    if(seaContainer.children.length > 3) {
      seaContainer.removeChildAt(1);
      seaContainer.removeChildAt(2);
    }
    const mesh = createWaveMesh({ width: width, height: height, uniform: 1 });
    // const mesh2 = createWaveMesh({ width: width, height: unit, uniform: 1.25 });
    mesh.name = "waveMesh";
    // mesh2.name = "waveMesh2";
    mesh.zIndex = 2;
    // mesh2.zIndex = 3;
 
    seaContainer.addChild(mesh);
    // seaContainer.addChild(mesh2);
  
    const wave1 = seaContainer.getChildByName("waveMesh") as Mesh;
    // const wave2 = seaContainer.getChildByName("waveMesh2") as Mesh;
   
    setSeaMesh([wave1]);

  }, [memoApp, width, height, unitHeight]);


  useEffect(() => {
    const seaContainer = memoApp.stage.getChildByName("seaContainer") as PixiContainer<DisplayObject>;

    seaContainer.mask = mask.current;
  }, [seaMesh, width, height, sea.ocean_height]);
  return (
    <Container name={"seaContainer"}>
      <Graphics zIndex={1} draw={seaDrawing} anchor={0.5} pivot={0.5} position={{x: width/2 -200, y: sea.ocean_pos}} scale={{x: 4.5, y: 0.5}}/>
      <Graphics ref={mask} zIndex={1} draw={seaDrawing} anchor={0.5} pivot={0.5} position={{x: width/2 -200, y: sea.ocean_pos}} scale={{x: 4.5, y: 0.5}}/>
    </Container>
  );
};

export default Sea;
