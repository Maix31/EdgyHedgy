class Shader {

    constructor(gl: WebGL2RenderingContext, type: WebGLShader, sourceCode: string) {
        // this.
    }
}

function createShader (gl: WebGL2RenderingContext, sourceCode: string, type: number) {
    // Compiles either a shader of type gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
    let shader = gl.createShader(type);
    gl.shaderSource(shader, sourceCode);
    gl.compileShader(shader);
  
    if ( !gl.getShaderParameter(shader, gl.COMPILE_STATUS) ) {
      let info = gl.getShaderInfoLog(shader);
      throw 'Could not compile WebGL program. \n\n' + info;
    }
    return shader;
}