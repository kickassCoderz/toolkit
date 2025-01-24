import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
    entry: ["src/**/*"],
    format: ["esm"],
    external: ["react", "@types/react"],
    dts: !options.watch,
    watch: options.watch ?? false,
    minify: !options.watch,
    clean: !options.watch,
    bundle: false,
}));
