import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import alias from "@rollup/plugin-alias";
import path from "path";
import { fileURLToPath } from "url";
import { dts } from "rollup-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateConfig(input, output, format = "esm") {
  return [
    {
      input: "./src/index.ts",
      output: {
        file: output,
        format,
        sourcemap: true,
      },
      plugins: [
        alias({
          entries: [
            {
              find: "@components",
              replacement: path.resolve(__dirname, "src/components"),
            },
            {
              find: "@utils",
              replacement: path.resolve(__dirname, "src/utils"),
            },
          ],
        }),
        peerDepsExternal(),
        nodeResolve({ extensions: [".js", ".jsx", ".ts", ".tsx"] }),
        commonjs(),
        babel({
          babelHelpers: "runtime",
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          exclude: "**/node_modules/**",
          plugins: ["@babel/plugin-transform-runtime"],
        }),
        typescript(),
      ],
      external: ["react", "react-dom", /@babel\/runtime/],
    },
    {
      input,
      output: {
        file: output.replace(/\.m?js$/, format === "esm" ? ".d.mts" : ".d.ts"),
        format: "esm",
      },
      plugins: [dts()],
    },
  ];
}

const config = [
  ...generateConfig("src/index.ts", "dist/index.js", "cjs"),
  ...generateConfig("src/index.ts", "dist/esm/index.mjs", "esm"),
];

export default config;
