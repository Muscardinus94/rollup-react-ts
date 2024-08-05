import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import alias from "@rollup/plugin-alias";
// import path from "path";
// import { fileURLToPath } from "url";
import url from "@rollup/plugin-url";
import { dts } from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };
import builtins from "builtin-modules";
import fs from "node:fs";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const external = () => {
  const dependencies = Object.keys(packageJson.dependencies || {});
  const peerDependencies = Object.keys(packageJson.peerDependencies || {});
  const subEntries = packageJson.subEntries || [];
  const externals = [
    ...dependencies,
    ...peerDependencies,
    ...builtins,
    ...subEntries,
  ];

  return (id) =>
    externals.some((externalPkg) => {
      if (externalPkg instanceof RegExp) {
        return externalPkg.test(id);
      }

      return id.startsWith(externalPkg);
    });
};

function generateConfig(input, output, format) {
  return [
    {
      input: input,
      output: {
        file: output,
        format,
        sourcemap: true,
      },
      plugins: [
        // alias({
        //   entries: [
        //     {
        //       find: "components",
        //       replacement: path.resolve(__dirname, "./components"),
        //     },
        //     {
        //       find: "utils",
        //       replacement: path.resolve(__dirname, "src/utils"),
        //     },
        //     {
        //       find: "module",
        //       replacement: path.resolve(__dirname, "src/module"),
        //     },
        //   ],
        // }),
        nodeResolve({ extensions: [".js", ".jsx", ".ts", ".tsx"] }),
        commonjs(),
        babel({
          babelHelpers: "runtime",
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
          extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs"],
          exclude: "**/node_modules/**",
          plugins: ["@babel/plugin-transform-runtime"],
        }),
        typescript(),
        url({
          include: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.gif"],
          limit: 0, // Always inline files
          emitFiles: true, // Emit files as separate files (default: true)
        }),
      ],
      external: external(),
    },
    {
      input,
      output: {
        file: output.replace(/\.m?js$/, format === "esm" ? ".d.mts" : ".d.ts"),
        format,
      },
      plugins: [dts()],
    },
  ];
}

const generateConfigBySubEntry = (subEntry) => {
  let entryPath = null;
  if (fs.existsSync(`./src/${subEntry}.ts`)) {
    entryPath = `./src/${subEntry}.ts`;
  }

  if (fs.existsSync(`./src/${subEntry}.tsx`)) {
    entryPath = `./src/${subEntry}.tsx`;
  }

  if (!entryPath) return [];

  return [
    ...generateConfig(entryPath, `dist/${subEntry}.js`, "cjs"),
    ...generateConfig(entryPath, `dist/esm/${subEntry}.mjs`, "esm"),
  ];
};

const config = [
  ...generateConfig(packageJson.entry, "dist/index.js", "cjs"),
  ...generateConfig(packageJson.entry, "dist/esm/index.mjs", "esm"),
  ...packageJson.subEntries.flatMap(generateConfigBySubEntry),
];

export default config;
