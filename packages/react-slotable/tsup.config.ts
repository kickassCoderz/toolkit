import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
    entry: ["src/index.tsx"],
    format: ["esm"],
    external: ["react"],
    dts: !options.watch,
    watch: options.watch ?? false,
    minify: !options.watch,
    clean: !options.watch,
    bundle: false,
}));
