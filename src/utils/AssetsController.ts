import { Assets, Texture } from "pixi.js";

import { store } from "../redux/index.slices";
import { isLoading } from "../redux/loading.slice";

import bubble_ani_1 from "/assets/animations/bubble/bubble_1.png";
import bubble_ani_2 from "/assets/animations/bubble/bubble_2.png";
import bubble_ani_3 from "/assets/animations/bubble/bubble_3.png";
import bubble_ani_4 from "/assets/animations/bubble/bubble_4.png";
import bubble_ani_5 from "/assets/animations/bubble/bubble_5.png";
import bubble_ani_6 from "/assets/animations/bubble/bubble_6.png";
import bubble_ani_7 from "/assets/animations/bubble/bubble_7.png";
import bubble_ani_8 from "/assets/animations/bubble/bubble_8.png";

import pipe_spawn_1 from "/assets/animations/spawn/pipe_spawn_1.png";
import pipe_spawn_2 from "/assets/animations/spawn/pipe_spawn_2.png";
import pipe_spawn_3 from "/assets/animations/spawn/pipe_spawn_3.png";
import pipe_spawn_4 from "/assets/animations/spawn/pipe_spawn_4.png";
import pipe_spawn_5 from "/assets/animations/spawn/pipe_spawn_5.png";
import pipe_spawn_6 from "/assets/animations/spawn/pipe_spawn_6.png";
import pipe_spawn_7 from "/assets/animations/spawn/pipe_spawn_7.png";
import pipe_spawn_8 from "/assets/animations/spawn/pipe_spawn_8.png";
import pipe_spawn_9 from "/assets/animations/spawn/pipe_spawn_9.png";
import pipe_spawn_10 from "/assets/animations/spawn/pipe_spawn_10.png";
import pipe_spawn_11 from "/assets/animations/spawn/pipe_spawn_11.png";
import pipe_spawn_12 from "/assets/animations/spawn/pipe_spawn_12.png";

import pipe from "/assets/pipe/pipe.png";

import pipes from "/assets/section_2/pipes.3.png";

import computer from "/assets/section_3/game.png";

import hello from "/assets/section_2/hello.png";

class AssetsLoader {
  static async loadAssetsBundle(name: string) {
    switch (name) {
      case "splash": {
        return AssetsLoader.convertBundleToAnimation(bubbleBundle);
      }
      case "spawn": {
        return AssetsLoader.convertBundleToAnimation(spawnBundle);
      }
      case "pipe": {
        return AssetsLoader.convertBundleToTexture(pipeBundle);
      }
      case "pipes": {
        return AssetsLoader.convertBundleToTexture(pipesBundle);
      }
      case "bubble": {
        return AssetsLoader.convertBundleToTexture(bubbleBundle);
      }
      case "computer": {
        return AssetsLoader.convertBundleToTexture(computerBundle);
      }

      case "hello": {
        return AssetsLoader.convertBundleToTexture(helloItsMeBundle);
      }
      default:
        break;
    }
  }
  static convertBundleToAnimation(
    bundle: typeof bubbleBundle | typeof spawnBundle
  ) {
    const array = Object.values(bundle);
    const textureArray = array.map((asset) => Texture.from(asset));
    return textureArray;
  }

  static convertBundleToTexture(
    bundle:
      | typeof helloItsMeBundle
      | typeof computerBundle
      | typeof pipeBundle
      | typeof bubbleBundle
      | typeof pipesBundle
  ) {
    const array = Object.values(bundle);
    const texture = Texture.from(array[0]);

    return texture;
  }

  static async loadAllAssets() {


    await Assets.load(bubbleBundle.bubble_ani_1);
    await Assets.load(bubbleBundle.bubble_ani_2);
    await Assets.load(bubbleBundle.bubble_ani_3);
    await Assets.load(bubbleBundle.bubble_ani_4);
    await Assets.load(bubbleBundle.bubble_ani_5);
    await Assets.load(bubbleBundle.bubble_ani_6);
    await Assets.load(bubbleBundle.bubble_ani_7);
    await Assets.load(bubbleBundle.bubble_ani_8);

    await Assets.load(spawnBundle.pipe_spawn_1);
    await Assets.load(spawnBundle.pipe_spawn_2);
    await Assets.load(spawnBundle.pipe_spawn_3);
    await Assets.load(spawnBundle.pipe_spawn_4);
    await Assets.load(spawnBundle.pipe_spawn_5);
    await Assets.load(spawnBundle.pipe_spawn_6);
    await Assets.load(spawnBundle.pipe_spawn_7);
    await Assets.load(spawnBundle.pipe_spawn_8);
    await Assets.load(spawnBundle.pipe_spawn_9);
    await Assets.load(spawnBundle.pipe_spawn_10);
    await Assets.load(spawnBundle.pipe_spawn_11);
    await Assets.load(spawnBundle.pipe_spawn_12);


    await Assets.load(pipeBundle.pipe);

    await Assets.load(pipesBundle.pipes);

    await Assets.load(computerBundle.computer);

    await Assets.load(helloItsMeBundle.hello);

    store.dispatch(isLoading(false));
  }
}

export default AssetsLoader;

const bubbleBundle = {
  bubble_ani_1,
  bubble_ani_2,
  bubble_ani_3,
  bubble_ani_4,
  bubble_ani_5,
  bubble_ani_6,
  bubble_ani_7,
  bubble_ani_8,
};
const spawnBundle = {
  pipe_spawn_1,
  pipe_spawn_2,
  pipe_spawn_3,
  pipe_spawn_4,
  pipe_spawn_5,
  pipe_spawn_6,
  pipe_spawn_7,
  pipe_spawn_8,
  pipe_spawn_9,
  pipe_spawn_10,
  pipe_spawn_11,
  pipe_spawn_12,
};

const pipeBundle = {
  pipe,
};

const pipesBundle = {
  pipes,
};

const computerBundle = {
  computer,
};

const helloItsMeBundle = {
  hello,
};
