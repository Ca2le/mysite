import { Geometry, Mesh, Program, Shader } from "pixi.js";

const vertexSrc = `
        precision mediump float;
        attribute vec2 aVertexPosition;
        attribute vec2 aUvs;
        uniform mat3 translationMatrix;
        uniform mat3 projectionMatrix;
        varying vec2 vUvs;
        
        void main() {
            vec2 vertex2DPosition = (projectionMatrix * translationMatrix * vec3(aVertexPosition, 1)).xy;
            vUvs = aUvs;
            gl_Position = vec4(vertex2DPosition, 0.0, 1.0);
        }
    `;

const fragmentSrcReal = `
    precision lowp float;
    varying vec2 vUvs;
    uniform float time;
    
    float gaussian(float z, float u, float o) {
        return (0.2 / (o * sqrt(2.0 * 3.1415))) * exp(-(((z - u) * (z - u)) / (2.0 * (o * o))));
    }
    
    void main() {
        float t = time * 12.0;
        float seed = dot(vUvs, vec2(12.9898, 78.233));
        float noise = fract(sin(seed) * 43758.5453 + t);
        noise = gaussian(noise, float(0.0), float(0.5) * float(0.5));
    
        gl_FragColor = vec4(noise, noise, noise, 0.1);
    }
`;
// chunk-FW4IDAYE.js?v=0b3d778a:8128 ERROR: 0:11: 'u_resolution' : undeclared identifier


const uniforms = {
  time: 0.0,
};

export const grainMeshCreator = (height: number, width: number) => {
  const prog = new Program(vertexSrc, fragmentSrcReal, "grainShader");
  const shader = new Shader(prog, uniforms);
  const geo = new Geometry(); 
  geo.addAttribute(
    "aVertexPosition",
    [0, 0, width, 0, 0, height, width, height],
    2
  );
  geo.addAttribute("aUvs", [0, 0, 1, 0, 0, 1, 1, 1], 2);
  geo.addIndex([0, 1, 2, 1, 2, 3]);
  const mesh = new Mesh(geo, shader);
  // mesh.pivot.set(width/2 , height/2);
  mesh.name = "grains";

  return mesh;
};
