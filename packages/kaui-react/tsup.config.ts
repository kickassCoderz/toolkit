import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
    entry: ["src/components", "src/utils"],
    format: ["esm"],
    external: [
        "react",
        "react-dom",
        "@pandacss/dev",
        "@ark-ui/react",
        "@kickass-coderz/panda-preset-kaui",
        "@kickass-coderz/kaui-react/system",
    ],
    dts: true,
    watch: options.watch ?? false,
    minify: !options.watch,
    clean: !options.watch,
}));
