import { Container, useApp, useTick } from "@pixi/react";
import { useEffect, useMemo, } from "react";
import { grainMeshCreator } from "../TestFilter";
import { useAppSelector } from "../redux/index.slices";

interface props {
  height: number;
}
const Grains = ({height} : props) => {
  const app = useApp();
  const memoApp = useMemo(() => {
    return app;
  }, [app]);

  const windowSize = useAppSelector((state) => state.windowSize);

  useTick(() => {
    // @ts-ignore
    memoApp.stage.children[1].shader.uniforms.time += 0.001;
  });

  useEffect(() => {
    if (app) {
        
        //   const grainBG = createGrainNoiseBG(windowSize);
        memoApp.stage.addChild(grainMeshCreator(height, windowSize.width));
        if(memoApp.stage.children.length > 2) {
            memoApp.stage.removeChildAt(1);
        }
    }
  }, [windowSize, memoApp, app]);


  return <Container alpha={0.1} name={'GrainContainer'} />;
};

export default Grains;
