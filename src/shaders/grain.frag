precision lowp float;

varying vec2 vUvs;

uniform float u_time;

// float random (vec2 st) {
//     return fract(sin(dot(st.xy + time * 0.1, vec2(12.9898,78.233))) * 43758.5453123);
// }

float gaussian(float z, float u, float o) {
    return (0.2 / (o * sqrt(2.0 * 3.1415))) * exp(-(((z - u) * (z - u)) / (2.0 * (o * o))));
}

void main() {
    float t = u_time * 1.0;
    float seed = dot(vUvs, vec2(12.9898, 78.233));
    float noise = fract(sin(seed) * 43758.5453 + t);
    noise = gaussian(noise, float(0.0), float(0.5) * float(0.5));

    gl_FragColor = vec4(noise, noise, noise, 0.1);
}