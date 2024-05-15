import { Container, Stage, useTick } from "@pixi/react";
import { useEffect, useRef } from "react";
import { store, useAppSelector } from "../redux/index.slices";
import Grains from "./Grains";
import { Provider } from "react-redux";

const getSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});
function GrainScreen() {
  const { height, width } = useAppSelector((state) => state.windowSize);
  const initialSize = getSize();
  const stageProps = {
    options: {
      width: width,
      height: height,
      backgroundAlpha: 1.0,
      backgroundColor: "#fff",
      antialias: true,
      
    },
  };

  return (
    <div style={{ position: 'fixed', zIndex: 500, top: 0, left: "0", backgroundColor:"#fff", opacity: 0.4, height: "100vh"}}>
      <Stage {...initialSize} {...stageProps}>
        <Provider store={store}>
          <Grains height={height} />
        </Provider>
      </Stage>
    </div>
  );
}

export default GrainScreen;
