import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
    entry: ["src/index.ts"],
    format: ["esm"],
    dts: true,
    watch: options.watch ?? false,
    minify: !options.watch,
    clean: !options.watch,
}));
