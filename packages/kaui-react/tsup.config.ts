import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
    entry: ["src/components", "src/preset.ts", "src/control-flow.tsx"],
    format: ["esm"],
    external: [
        "react",
        "@types/react",
        "@pandacss/dev",
        "@kickass-coderz/panda-preset-kaui",
        "@kickass-coderz/kaui-react/styled-system",
    ],
    dts: !options.watch,
    watch: options.watch ?? false,
    minify: !options.watch,
    clean: !options.watch,
    bundle: false,
}));
