import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "components/main.ts",
  output: [
    {
      dir: "dist/esm",
      format: "esm",
      preserveModules: true,
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      preserveModules: true,
    },
  ],
  plugins: [
    typescript({
      compilerOptions: {
        outDir: undefined,
        declaration: false,
        declarationDir: undefined,
      },
    }),
    postcss({
      extensions: [".css"],
      inject: false,
      extract: true,
      modules: true,
      namedExports: true,
    }),
  ],
};
