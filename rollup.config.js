import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "./src/js/app.js",
  output: {
    file: "./dist/app.js",
    format: "iife",
    name: "app"
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**"
    }),
    nodeResolve(),
    terser()
  ]
}
