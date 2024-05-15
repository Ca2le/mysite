import { Geometry, Mesh, Program, Shader } from "pixi.js";

interface geometry {
    width: number;
    height: number;
    uniform: number;
}

const waveMesh = ({width, uniform}: geometry) => {
    const geometry = new Geometry();
    geometry.addAttribute('aVertexPosition', 
    [   
    //x, y
      0, 0,
      0, 100,
      width, 0,
      width, 100     
    ])
    
    // geometry.addAttribute("aUvs", [0, 0, 1, 0, 0, 1, 1, 1], 2);
    geometry.addIndex([0, 1, 2, 1, 2, 3]);
    const vertexSrc = `
    precision mediump float;
    // Attributes

    attribute vec2 aVertexPosition;
    
    // Uniforms
    uniform mat3 translationMatrix;
    uniform mat3 projectionMatrix;
    uniform float position;
    uniform float time;
    varying float Y;
    varying float X;
    varying vec2 vertPos;
    
    void main() {
       
     
        float animationPhase = mod(time, 20.0);
        
        vec2 POS = (projectionMatrix * translationMatrix * vec3(aVertexPosition, 1)).xy;
        vertPos = POS;
        Y = POS.y;
        X = POS.x;

                gl_Position = vec4(X, Y, 1.0, 1.0) ;
            
        
    }
    
    `;
    

    // Fragment shader
    const fragmentSrc = `
    precision mediump float;
    varying float Y;
    varying float X;
    uniform float time;
    varying vec2 vertPos;
  
    void main() {
        float YY = Y / 1.0;
        float time2 = time - 0.5 * 0.2;
        float displacment = 0.0; 
        float waveX1 = Y*1.3 + displacment;
        float waveX2 = X*1.3 + 13.0 * 1.6 + displacment;
        float waveX3 = Y*1.4 + 17.0 * 1.6 + displacment;
        float wave1 = 0.2;
        float wave2 = 0.2;
        float wave3 = 0.2;
        float wave4 = 0.3;
        float wave5 = 0.3;
        float wave6 = 0.3;
       

       

        wave1 += sin(waveX1 * 6.0 + sin(time2 + YY * 70.0 + cos(waveX1 * waveX2 + time2 * 35.0) )+ 1.0) * (0.3 * YY) ;
        wave2 += sin(waveX2 * 6.0 + sin(time + YY * 70.0 + cos(waveX2 * waveX3 + time * 35.0) )+ 1.0) * (0.3 * YY);
        wave3 += sin(waveX3 * 6.0 + sin(time2 + YY * 70.0 + cos(waveX3 * waveX1 + time2 * 35.0) )+ 1.0) * ( 0.3 *YY);
       
        wave4 -= sin(waveX1 * 3.0 + sin(time2 + (YY*1.1) * 90.0 + sin(waveX1 * waveX1 + time2 * 35.0) )+ 1.0) * (0.3 * YY) ;
        wave5 -= sin(waveX2 * 3.0 + sin(time + (YY*1.4) * 90.0 + sin(waveX2 * waveX2 + time * 35.0) )+ 1.0) * (0.3 * YY);
        wave6 -= sin(waveX3 * 3.0 + sin(time2 + (YY*1.3) * 90.0 + sin(waveX3 * waveX3 + time2 * 35.0) )+ 1.0) * (0.3 * YY);

        vec3 combinedWaves = vec3(wave1, wave2, wave3);
        float opacity = 0.01;
        vec3 colorFinal = wave4 * combinedWaves + wave5 * combinedWaves + wave6 * combinedWaves;
        gl_FragColor = vec4(colorFinal, combinedWaves.xyz);
    }
    
    `;

const program = new Program(vertexSrc, fragmentSrc, 'waveShader') 
const combineUniforms = {
    time: 0.0,
    position: uniform
};
const waveShader = new Shader(program, combineUniforms)

const waveMesh = new Mesh(geometry, waveShader);
// waveMesh.pivot.set(0 , 0);
waveMesh.position.set(0, 600);
// waveMesh.width = width;
// waveMesh.height = 200;


return waveMesh;

}


 export default waveMesh;