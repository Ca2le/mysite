import { DisplayObject, Mesh, Container as PixiContainer } from "pixi.js";
import { useApp, useTick } from "@pixi/react";
import { useEffect, useState } from "react";
import JiggleBox from "../experiments/JiggleBox/JiggleBox.shader";

interface JiggleBoxProps {
  imgPath: string;
  x: number;
  y: number;
  w: number;
  h: number;
  jiggleOnce: boolean;
  isSliding?: boolean;
}

const JiggleBoxComponent = ({
  imgPath,
  x,
  y,
  w,
  h,
  jiggleOnce,
  isSliding,
}: JiggleBoxProps) => {
  const speed = 4;
  const rootFrequency = 4.5;
  const [isJiggling, setIsJiggling] = useState(false);
  const [frequency, setFrequency] = useState(rootFrequency);
  const [tick, setTick] = useState(0);
  const [rootVertices, setRootVertices] = useState<number[]>([]);
  const [container, setContainer] =
    useState<PixiContainer<DisplayObject> | null>(null);
  const [vertices, setVertices] = useState<number[]>([
    0,0,      w / 2,0,      w,0,
    w,h/2,    w/2,h/2,      0,h/2,
    0,h,      w/2,h,        w,h,
  ]);
  const [onlyOnce, setOnlyOnce] = useState(false);
  const app = useApp();

  useTick((delta) => {
    if (isJiggling) {
      setTick((tick) => (tick += 0.12 * delta));
    } else {
      setTick(0);
    }
  });

  useEffect(() => {
    if (jiggleOnce) {
      setIsJiggling(true);
    } else {
      setIsJiggling(false);
    }
  }, [jiggleOnce]);

  useEffect(() => {
    if (isSliding) {
      setIsJiggling(false);
      setVertices(rootVertices);
    }
  }, [isSliding]);

  useEffect(() => {
    setVertices((vertices) => {
      const newVertices = [...vertices];
      // 🌈 [X Y]
      //      0 1     2  3     4  5
      //     [0 0],  [50 0], [100 0],
      //      6  7     8  9     10 11
      //     [100 50], [50 50], [0 50],
      //      12 13    14 15     16  17
      //     [0 100], [50 100], [100 100]
      // 🌈 [X Y]

      newVertices[0] += Math.sin(tick * speed) * frequency;
      newVertices[4] += Math.sin(tick * speed) * frequency;
      newVertices[6] += Math.cos(tick * speed) * frequency * 0.55;
      newVertices[10] += Math.cos(tick * speed) * frequency * 0.55;
      newVertices[12] += Math.sin(tick * speed) * frequency * 0.05;
      newVertices[16] += Math.sin(tick * speed) * frequency * 0.05;

      if (newVertices[0] > -0.7 && newVertices[0] < 0.7) {
        setFrequency((prevFrequency) => prevFrequency - 0.44);
      }
      return newVertices;
    });
  }, [tick]);

  useEffect(() => {
    const container = app.stage;

    setContainer(container);
  }, [app]);

  useEffect(() => {
    if (frequency <= 0.1) {
      setFrequency(rootFrequency);
      setIsJiggling(false);
      setVertices(rootVertices);
    }
  }, [frequency]);

  useEffect(() => {
    if (container && !onlyOnce) {
      const jiggleBox = new JiggleBox(imgPath, w, h);
      const mesh = jiggleBox.mesh as Mesh;
      mesh.eventMode = "static";

      setRootVertices(jiggleBox.getStartingPosition());
      mesh.on("pointerenter", () => {
        setIsJiggling(true);
      });
      mesh.position.set(x, y);

      container.addChild(mesh);
      console.log(container, "container");
      setOnlyOnce(true);
    }
  }, [container, onlyOnce]);
  useEffect(() => {
    if (container) {
      const mesh = container.children[0] as Mesh;
      const buffer = mesh.geometry.getBuffer("aVertexPosition");
      buffer.update(new Float32Array(vertices));
    }
  }, [vertices]);

  return <></>;
};

export default JiggleBoxComponent;
