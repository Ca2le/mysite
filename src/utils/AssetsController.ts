import { Assets, Texture } from "pixi.js"

import { store } from "../redux/index.slices";
import { isLoading } from "../redux/loading.slice";


class AssetsLoader {
    static async loadAssetsBundle(name: string) {
        switch (name) {
            case 'splash': {
                return AssetsLoader.convertBundleToAnimation(bubbleBundle)
            }
            case 'spawn': {
                return AssetsLoader.convertBundleToAnimation(spawnBundle)
            }
            case 'pipe': {
                return AssetsLoader.convertBundleToTexture(pipeBundle)
            }
            case 'pipes': {
                return AssetsLoader.convertBundleToTexture(pipesBundle)
            }
            case 'bubble': {
                return AssetsLoader.convertBundleToTexture(bubbleBundle)
            }
            case 'computer': {
                return AssetsLoader.convertBundleToTexture(computerBundle)
            }

            case 'hello': {
                return AssetsLoader.convertBundleToTexture(helloItsMeBundle)
            }
            default:
                break
        }
    }
    static convertBundleToAnimation(bundle: typeof bubbleBundle | typeof spawnBundle) {
        const array = Object.values(bundle)
        const textureArray = array.map((asset) => Texture.from(asset))
        return textureArray
    }

    static convertBundleToTexture(bundle: typeof helloItsMeBundle | typeof computerBundle | typeof pipeBundle | typeof bubbleBundle | typeof pipesBundle ) {
        const array = Object.values(bundle)
        const texture = Texture.from(array[0])

        return texture
    }

    
    static async loadAllAssets() {
        await Assets.load(bubbleBundle.bubble1)
        await Assets.load(bubbleBundle.bubble2)
        await Assets.load(bubbleBundle.bubble3)
        await Assets.load(bubbleBundle.bubble4)
        await Assets.load(bubbleBundle.bubble5)
        await Assets.load(bubbleBundle.bubble6)
        await Assets.load(bubbleBundle.bubble7)
        await Assets.load(bubbleBundle.bubble8)

        await Assets.load(spawnBundle.spawn1)
      

        await Assets.load(pipeBundle.pipe_1)

        await Assets.load(pipesBundle.pipes)

        await Assets.load(computerBundle.computer)

        await Assets.load(helloItsMeBundle.hello)

        store.dispatch(isLoading(false))
    }
}

export default AssetsLoader

enum bubbleBundle {
    bubble1 = '/assets/animations/bubble/bubble_1.png',
    bubble2 = '/assets/animations/bubble/bubble_2.png',
    bubble3 = '/assets/animations/bubble/bubble_3.png',
    bubble4 = '/assets/animations/bubble/bubble_4.png',
    bubble5 = '/assets/animations/bubble/bubble_5.png',
    bubble6 = '/assets/animations/bubble/bubble_6.png',
    bubble7 = '/assets/animations/bubble/bubble_7.png',
    bubble8 = '/assets/animations/bubble/bubble_8.png'
}
enum spawnBundle {
    spawn1 = '/assets/animations/spawn/pipe_spawn_1.png',
    spawn2 = '/assets/animations/spawn/pipe_spawn_2.png',
    spawn3 = '/assets/animations/spawn/pipe_spawn_3.png',
    spawn4 = '/assets/animations/spawn/pipe_spawn_4.png',
    spawn5 = '/assets/animations/spawn/pipe_spawn_5.png',
    spawn6 = '/assets/animations/spawn/pipe_spawn_6.png',
    spawn7 = '/assets/animations/spawn/pipe_spawn_7.png',
    spawn8 = '/assets/animations/spawn/pipe_spawn_8.png',
    spawn9 = '/assets/animations/spawn/pipe_spawn_9.png',
    spawn10 = '/assets/animations/spawn/pipe_spawn_10.png',
    spawn11 = '/assets/animations/spawn/pipe_spawn_11.png',
    spawn12 = '/assets/animations/spawn/pipe_spawn_12.png',

}

enum pipeBundle {
    pipe_1 = '/assets/pipe/pipe.png',
   
}

enum pipesBundle {
    pipes = '/assets/section_2/pipes.3.png',
}

enum computerBundle {
    computer = '/assets/section_3/game.png',
}

enum helloItsMeBundle {
    hello = '/assets/section_2/hello.png',
}