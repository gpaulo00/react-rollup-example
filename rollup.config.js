
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import babel from "rollup-plugin-babel"

export default {
  entry : "src/index.js",
  format : "iife",
  dest : "build/bundle.js",
  plugins : [
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({exclude: "node_modules/**"})
  ]
}
