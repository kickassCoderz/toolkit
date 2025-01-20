import { createKickassUIPreset, mauve, plum } from "@kickass-coderz/panda-preset-kaui";
import { defineConfig } from "@pandacss/dev";

const kickassPreset = createKickassUIPreset({
    accentColor: plum,
    neutralColor: mauve,
});

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    presets: [kickassPreset],

    // Where to look for your css declarations
    include: ["./src/**/*.{ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {},
    },

    // The output directory for your css system
    importMap: "@kickass-coderz/kaui-react/system",
    outdir: "system",
    jsxFramework: "react",
    jsxStyleProps: "minimal",
    outExtension: "js",
    lightningcss: true,
    clean: true,
});
