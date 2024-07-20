import typescript from "@rollup/plugin-typescript";
import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-import-css";

/** @type {import('rollup').RollupOptions} */
const config = {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
  },
  plugins: [
    typescript(),
    svelte(),
    resolve({
      browser: true,
      exportConditions: ["svelte"],
      extensions: [".svelte"],
    }),
    css({
      output: "index.css",
    }),
  ],
};

export default config;
