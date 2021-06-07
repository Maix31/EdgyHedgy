import {Renderer} from "./renderer.js";
import "../node_modules/gl-matrix/gl-matrix.js"
// import { glMatrix } from "../node_modules/gl-matrix/gl-matrix.js";


// glMatrix.setMatrixArrayType(Array);

// if (!glMatrix.equals(1,1)) {
  //   console.log("It works");
  // }
  
  //
  // start here
  //
  function main() {
    const canvas = document.querySelector("canvas");
    // Initialize the GL context
    const gl = canvas.getContext("webgl2");
    new Renderer(gl).hello();
  
    console.log("Hello")

    // Only continue if WebGL is available and working
    if (gl === null) {
      alert("Unable to initialize WebGL. Your browser or machine may not support it.");
      return;
    }
  
    // Set clear color to black, fully opaque
    gl.clearColor(1.0, 1.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
}
  
window.onload = main;