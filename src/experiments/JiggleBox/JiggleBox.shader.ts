import { Geometry, Mesh, Program, Shader, Texture } from "pixi.js";

interface IUniforms {
  u_time: { value: number };
  uSamplerTexture: Texture;
}

class JiggleBox {
  private uniforms: IUniforms;
  private h;
  private w;
  private z = 0.5;
  private x;
  private y;
  private vertexSrc: string;
  private fragmentSrc: string;
  private program: Program | null = null;
  private geometry: Geometry | null = null;
  private shader: Shader | null = null;
  public mesh: Mesh<Shader> | null = null;

  constructor(imgPath: string, width: number, height: number) {
    this.h = height;
    this.w = width;
    this.x = width / 2;
    this.y = height / 2;
    this.uniforms = {
      u_time: { value: 0 },
      uSamplerTexture: Texture.from(imgPath)
    };

    this.vertexSrc = `
        attribute vec2 aVertexPosition;
    
        // Uniforms
        uniform mat3 translationMatrix;
        uniform mat3 projectionMatrix;
        attribute vec2 aUv;
        varying vec2 vUv;
        
        varying float Y;
        varying float X;
        void main() {
            vUv = aUv;
            vec2 POS = (projectionMatrix * translationMatrix * vec3(aVertexPosition, 1)).xy;
            Y = POS.y;
            X = POS.x;
            gl_Position = vec4(X, Y, 1.0, 1.0) ;
        }
        `;
    this.fragmentSrc = `
        uniform float u_time;
        uniform vec2 u_resolution;
        varying vec2 vUv;
        uniform sampler2D uSamplerTexture;

    
        void main() {

          gl_FragColor = texture2D(uSamplerTexture, vUv);
        }
        `;

    this.createMesh();
  }

  public createMesh() {
    this.createGeometry();
    this.createProgram();
    this.createShader();
    if (this.geometry && this.shader)
      this.mesh = new Mesh(this.geometry, this.shader);
  }

  private createGeometry() {
    const { w, h, z, x, y } = this;
    const geometry = new Geometry();
    geometry.addAttribute("aVertexPosition", [
        0,0,      x,0,      w,0,
        w,y,      x,y,      0,y,
        0,h,      x,h,      w,h,
    ]);
    
    geometry.addAttribute('aUv', [
        0, 0,      z, 0,   1, 0,
        1, z,      z, z,   0, z,
        0, 1,      z, 1,   1, 1
    ]);
    
    geometry.addIndex([
        0, 1, 4,
        0, 4, 5,
        1, 2, 3,
        1, 3, 4,
        3, 7 ,8,
        3, 4, 7,
        4, 6, 7,
        4, 5, 6
    ]);
    
    

    this.geometry = geometry;
  }
  public getStartingPosition() {
    const { w, h, x, y } = this;
    return [
        0,0,      x,0,      w,0,
        w,y,      x,y,      0,y,
        0,h,      x,h,      w,h,
    ]
  }
  private createProgram() {
    this.program = new Program(
      this.vertexSrc,
      this.fragmentSrc,
      "JiggleBoxShader"
    );
  }
  private createShader() {
    if (this.program) this.shader = new Shader(this.program, this.uniforms);
  }
}

export default JiggleBox;
