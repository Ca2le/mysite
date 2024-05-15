#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    // Normalize the coordinates
    vec2 st = gl_FragCoord.xy / u_resolution.xy;

    // Create a wave effect using sine function
    float wave = sin(((st.y*st.x) * 10.0)  * 4.0);

    // Add the wave effect to the y-coordinate
    st.y += wave;

    // Output color
    gl_FragColor = vec4(st, 0.0, 1.0);
}