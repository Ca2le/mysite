import { Geometry, Mesh, Program, Shader } from "pixi.js";

const geometry = new Geometry();
geometry.addAttribute('aVertexPosition', 
[
    0, 0, 
    400, 0,
    0, 400, 
    400, 400
], 2);

geometry.addAttribute('aUvs',
[
    0, 0, 
    1, 0, 
    0, 1, 
    1, 1
], 2);

geometry.addIndex([0, 1, 2, 1, 2, 3]);
const vertexSrc = `
precision mediump float;

attribute vec2 aVertexPosition;
attribute vec2 aUvs;
uniform mat3 translationMatrix;
uniform mat3 projectionMatrix;

varying vec2 vUvs;

void main() {
    // Pass through the vertex UV coordinates
    vUvs = aUvs;
    
    // Transform the vertex position
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 0.4)).xy, 0.0, 1.0);
}
`;

// Fragment shader
const fragmentSrc = `
precision lowp float;

varying vec2 vUvs;

uniform float time;

float random (vec2 st) {
    return fract(sin(dot(st.xy + time * 0.1, vec2(12.9898,78.233))) * 43758.5453123);
}

float gaussian(float z, float u, float o) {
    return (0.2 / (o * sqrt(2.0 * 3.1415))) * exp(-(((z - u) * (z - u)) / (2.0 * (o * o))));
}

void main() {
    float t = time * 1.0;
    float seed = dot(vUvs, vec2(12.9898, 78.233));
    float noise = fract(sin(seed) * 43758.5453 + t);
    noise = gaussian(noise, float(0.0), float(0.5) * float(0.5));

    gl_FragColor = vec4(noise, noise, noise, 0.1);
}
`;


const program = new Program(vertexSrc, fragmentSrc, 'grainShader') 

const combineUniforms = {
    time: 0.0,

};
const grainShader = new Shader(program, combineUniforms)

export const quad = new Mesh(geometry, grainShader);



 